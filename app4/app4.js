const net  = require('net');
const server = net.createServer((socket) => {
  console.log('client connecting');
  server.maxConnections = 2;
  server.getConnections((err,count) => {
    console.log('client:',count)
  })
})
server.listen(9090,() => {
  const address = server.address();
  console.log(address.port,address.address,address.family)
})