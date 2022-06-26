const cluster = require('cluster');
const http = require('http');
const cpus = require('os').cpus().length;

// cluster基本原理：主进程去fork子进程，并管理它们
if(cluster.isMaster) {
  for(let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  const PORT = 8000;
  http.createServer(function(req, res) {
    http.get('http://www.baidu.com');
    res.end('hello');

  }).listen(PORT, () => {
    console.log('server is listening: ', PORT);
  });

}