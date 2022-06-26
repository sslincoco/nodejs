const path = require('path');
const fork = require('child_process').fork;
const cpus = require('os').cpus();

const server = require('net').createServer();
server.listen(6001, () => {
  console.log('server is listening: 6001');
});

const LIMIT = 10;
const during = 6000; // 6s 内重启

let count = 0;
let restart = [];
const isTooFrequently = function() {
  const now = Date.now();
  const last = restart[count];
  if (last && now - last < during) {
    return true;
  }
  restart[count] = now;
  count = (count + 1) % LIMIT;
  return false;
}

const workers = {};
const createWorker = function() {
  if(isTooFrequently()) {
    console.log('too frequently, stop create worker');
    return;
  }
  const worker = fork(path.resolve(__dirname, './worker.js'));
  worker.on('exit', function() {
    delete workers[worker.pid];
    console.log('worker ' + worker.pid + ' exit');
    createWorker();
  });

  worker.send('server', server);
  workers[worker.pid] = worker;
  count++;
  console.log('create worker ' + worker.pid);
}

for(let i = 0; i < cpus.length; i++) {
  createWorker();
}

process.on('exit', function() {
  for(let pid in workers) {
    workers[pid].kill();
  }
  console.log('master exit');
});
