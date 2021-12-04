const net = require('net');
const client = new net.Socket();
client.connect(9090,'localhost',() => {
  console.log('client connect to server')
})