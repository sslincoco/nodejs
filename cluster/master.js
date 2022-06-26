const cluster = require("cluster");
const http = require("http");
const cpus = require("os").cpus().length;

// cluster基本原理：主进程去fork子进程，并管理它们
if (cluster.isMaster) {
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
  console.log('master process %d is running', process.pid);

  // 当任何工作进程死亡时，则集群模块将触发 'exit' 事件
  cluster.on('exit', (worker, code, signal) => {
    console.log('worker %d died (%s). restarting...',
                worker.process.pid, signal || code);
    cluster.fork();
  });
  cluster.on('message', (worker, message, handle) => {
    console.log('message from worker %d', worker.process.pid, message);
  });
} else {
  // 工作进程可以共享任何TCP连接
  // http.createServer(function(req, res) {
  //   // http.get('http://www.baidu.com');
  //   res.end('hello');

  // }).listen(8000, () => {
  //   console.log('server is listening: ', PORT);
  // });

  console.log('process %d is running', process.pid);
  const net = require("net");
  const server = net.createServer((socket) => {
    // Connections never end
    cluster.worker.send({
      pid: process.pid,
      msg: 'hello'
    })
  });
  server.listen(8000);

  process.on("message", (msg) => {
    if (msg === "shutdown") {
      // Initiate graceful close of any connections to server
    }
  });
}

// if (cluster.isPrimary) {
//   const worker = cluster.fork();
//   let timeout;

//   worker.on("listening", (address) => {
//     worker.send("shutdown");
//     worker.disconnect();
//     timeout = setTimeout(() => {
//       worker.kill();
//     }, 2000);
//   });

//   worker.on("disconnect", () => {
//     clearTimeout(timeout);
//   });
// } else if (cluster.isWorker) {
//   const net = require("net");
//   const server = net.createServer((socket) => {
//     // Connections never end
//   });
//   server.listen(8000);

//   process.on("message", (msg) => {
//     if (msg === "shutdown") {
//       // Initiate graceful close of any connections to server
//     }
//   });
// }
