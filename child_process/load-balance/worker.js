let count = 0;
const buf =  `handled by child, pid is ${process.pid} \n`;
var res = ['HTTP/1.1 200 OK','content-length:' + buf.length].join('\r\n')+'\r\n\r\n'+buf;

process.on('message', (msg, socket) => {
  if (msg === 'handle') {
    ++count;
    console.log('got a connection on worker, pid = %d, count = %d', process.pid, count);
    socket.end(res);
  }
});