// child_process 子进程监听不同端口
var http = require('http');
// 监听1000到2000 之间的随机端口
const PORT = Math.round(1000 + Math.random() * 1000);

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello ' + process.pid);
}).listen(PORT, () => {
  console.log(`server is listening: ${PORT}`);
});