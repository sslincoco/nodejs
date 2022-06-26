// master.js
const cp = require('child_process')
const n = cp.fork('./worker.js')

n.on('message', msg => {
  console.log('parent receive:', msg)
})

n.send({
  hello: 'i am from master'
})