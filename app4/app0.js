const net  = require('net');
const server = net.createServer((socket) => {
  console.log('client connected');

});
server.listen(9090,() => {
  console.log('server listen')
})