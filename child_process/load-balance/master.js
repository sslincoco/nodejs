// 简单实现，使用户请求能够公平的分散到多个进程来处理
const path = require('path');
const cp = require('child_process');
const cpus = require('os').cpus();
const net = require('net');
const workers = [];

for(let i = 0; i < cpus.length; i++) {
  const worker = cp.fork(path.resolve(__dirname, './worker.js'));
  workers.push(worker);
}

net.createServer((socket) => {
  const worker = workers.pop();
  worker.send('handle', socket);
  workers.unshift(worker);
}).listen(6001);

