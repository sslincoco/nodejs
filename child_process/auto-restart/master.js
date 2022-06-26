const path = require('path');
const fork = require('child_process').fork;
const cpus = require('os').cpus();

const server = require('net').createServer();
server.listen(6001, () => {
  console.log('server is listening: 6001');
});

const workers = {};
const createWorker = function() {
  const worker = fork(path.resolve(__dirname, './worker.js'));
  worker.on('exit', function() {
    delete workers[worker.pid];
    console.log('worker ' + worker.pid + ' exit');
    createWorker();
  });

  worker.send('server', server);
  workers[worker.pid] = worker;
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
