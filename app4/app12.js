const dgram = require('dgram');
const message = Buffer.from('message from client');
const client = dgram.createSocket('udp4');
client.send(message, 0, message.length, 9090, 'localhost', (err, bytes) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(bytes)
});
client.on('message', (mes, info) => {
  const message2 = 'hello world'
  console.log(mes.toString())
  client.send(message2,0,message2.length, 9090, 'localhost', )
})