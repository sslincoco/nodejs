const http = require('http')
var qs = require('querystring');

http.createServer((req, res) => {
  if(req.url.startsWith('/fib')) {
    const { n = 45 } = qs.parse(req.url.split('?')[1] || '')
    res.end(String(fib(n)))
  } else if(req.url === '/exc') {
    throw new Error('exception');
  } else {
    res.end(`<h1>you are visiting: ${req.url}</h1>`)
  }
}).listen(8001, () => {
  console.log('server is listening 8001')
})

// 斐波那契函数 递归
function fib(n) {
  if(n <= 1) {
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}
