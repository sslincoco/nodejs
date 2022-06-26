const http = require('http');

// 进程：监听某一个端口的http服务
const PORT = 8000;
http.createServer(function(req, res) {
  http.get('http://localhost:6001/');
  res.end('hello');

}).listen(PORT, () => {
  console.log('server is listening: ', PORT);
});