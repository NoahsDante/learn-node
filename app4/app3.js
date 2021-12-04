const net  = require('net');
const server = net.createServer((socket) => {
  console.log('client connecting');
})
server.listen(9090,() => {
  const address = server.address();
  console.log(address.port,address.address,address.family)
})