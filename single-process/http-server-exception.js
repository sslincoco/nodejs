const http = require('http')

http.createServer((req, res) => {
  if(req.url === '/exc') {
    throw new Error('error');
  } else {
    res.end(`<h1>you are visiting: ${req.url}</h1>`)
  }
}).listen(8000, () => {
  console.log(`server is listening`)
})