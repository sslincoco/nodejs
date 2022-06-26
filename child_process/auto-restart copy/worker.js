const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello ' + process.pid);
  // throw new Error('uncaughtException');
});

var tcpServer;
process.on('message', (m, tcp) => {
  if(m === 'server') {
    tcpServer = tcp;
    tcp.on('connection', (socket) => {
      server.emit('connection', socket);
    });
  }
});


process.on('uncaughtException', (err) => {
  console.error(err);
  process.send({ act: 'suicide'});
  // 停止接收新的连接
  tcpServer.close(function(){
    // 所有已有连接断开后，退出进程
    process.exit(1);
  });

  // 优雅退出，防止等待长链接断开需要较久的时间
  setTimeout(function() {
    process.exit(1);
  }, 5000);
});