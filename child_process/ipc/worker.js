// worker.js
process.on('message', msg => {
  console.log('child receive:', msg)
})

process.send({
  foo: 'i am from worker'
})