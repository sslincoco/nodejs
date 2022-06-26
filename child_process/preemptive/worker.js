const net = require('net');
process.on('message', (msg, handle) => {
  if(msg === 'handle') {
    start(handle);
  }
});

let count = 0;
const buf =  `handled by child, pid is ${process.pid} \n`;
var res = ['HTTP/1.1 200 OK','content-length:' + buf.length].join('\r\n')+'\r\n\r\n'+buf;

function start(server) {
    server.listen();
    server.onconnection = function(err,handle) {
      ++count;
      console.log('got a connection on worker, pid = %d, count = %d', process.pid, count);
      var socket = new net.Socket({
          handle: handle
      });
      socket.readable = socket.writable = true;
      socket.end(res);
    }
}