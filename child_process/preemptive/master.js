const net = require('net');
const fork = require('child_process').fork;
const cpus = require('os').cpus();

const handle = net._createServerHandle('0.0.0.0', 6001); 

for(let i = 0; i < cpus.length; i++) {
  const worker = fork('./worker.js');
  worker.send('handle', handle);
}
