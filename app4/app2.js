const net  = require('net');
const server = new net.Server();
server.on('connection',(socket) => {
  console.log('client connection')
});
server.listen(9090);
server.on('listening',() => {
  console.log('listening')
  server.close();
});
server.on('close',() => {
  console.log('close')
})
server.on('error',(err) => {
  console.log(err)
})