// 斐波那契函数 非递归
module.exports = function fib(n) {
  let a = 1, b = 1, c = 0
  for(let i = 3; i <= n; i++) {
    c = a + b
    a = b
    b = c
  }
  return c
}

// 斐波那契函数 递归
function fib_recursion(n) {
  if(n <= 1) {
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}