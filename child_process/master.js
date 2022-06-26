// master.js
const path = require('path');
const cp = require('child_process');
var cpus = require('os').cpus();

var server = require('net').createServer();
const child = cp.fork(path.resolve(__dirname, './worker.js'));

console.log(`主进程: ${process.pid}, 子进程: ${child.pid}`);

// server.on('connection', (socket) => {
//   socket.end('handled by parent \n');
// });
server.listen(6001, () => {
  child.send('server', server);
  server.close();
});


// for(let i = 0; i < cpus.length; i++) {
//   const n = cp.fork(path.resolve(__dirname, './worker.js'));
//   n.on('message', msg => {
//     console.log('parent receive:', msg);
//   });
//   n.send({
//     hello: 'world'
//   });
// }

var handle = net._createServerHandle('0.0.0.0', 3000);
