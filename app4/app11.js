const dgram = require('dgram');
const message = Buffer.from('message from server');
const server = dgram.createSocket('udp4', (meg, info) => {
  server.send(message, 0, message.length, info.port, info.address, (err, bytes) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(bytes)
  })
});
server.bind(9090,'localhost',() => {
  console.log('server 9090')
})
server.on('message',(mes,info) => {
  console.log(mes.toString())
})