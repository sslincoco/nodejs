// master.js
const path = require('path');
const cp = require('child_process');
var cpus = require('os').cpus();

for(let i = 0; i < cpus.length; i++) {
  cp.fork(path.resolve(__dirname, './worker.1.js'));
}
