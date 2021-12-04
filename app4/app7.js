const net = require('net');
const server = net.createServer((socket) => {
  console.log('local port' + socket.localPort);
  console.log('local address' + socket.localAddress);
  console.log('remote port' + socket.remotePort);
  console.log('remote address' + socket.remoteAddress);
  console.log('remote family' + socket.remoteFamily);
});
server.listen(9090, () => {
  console.log('listening')
})