const net = require('net');
const server = net.createServer((socket) => {
  const address = socket.address();
  const message = 'server address is' + JSON.stringify(address)
  socket.write(message, () => {
    const writeSize = socket.bytesWritten;
    console.log(message);
    console.log('message size', writeSize)
  })


  socket.on('data',(data) => {
    const redSize = socket.bytesRead;
    console.log(data.toString())
    console.log('data size '+ redSize);
  })
});
server.listen(8080, () => {
  console.log('listening')
})