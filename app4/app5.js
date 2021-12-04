const net  = require('net');
const server = net.createServer((socket) => {
  socket.on('data',(data) => {
    console.log(data.toString())
  })

});
server.listen(9090,() =>{
  console.log('listening')
})