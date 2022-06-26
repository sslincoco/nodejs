const http = require('http');

setInterval(() => {
  http.get({
    hostname: 'localhost',
    port: 3000
  }, (res) => {
    console.log(res.toString());
  })

}, 100);