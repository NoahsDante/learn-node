const net = require('net');
const client = new net.Socket();
client.connect(8080,'localhost',() => {
  console.log('client connect to server')
})
client.on('data',(data) => {
  console.log('data' + data.toString())
})