// var http = require('http');
// var httpServer = http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   });
//   res.end('handled by child, pid is ' + process.pid);
// });
// process.on('message', (msg, tcp) => {
//   if( msg === 'server') {
//     tcp.on('connection', (socket) => {
//       httpServer.emit('connection', socket);
//     });
//   }
// });

process.on('message', (m, server) => {
  if (m === 'server') {
    server.on('connection', (socket) => {
      socket.end(`handled by child, pid is ${process.pid} \n`);
    });
  }
});