const http = require('http');
const events = require('events');
const server = http.createServer();

server.on('request',(req,res) => {
  if(req.url == '/') {
    console.log('addlistener');
    res.end('end2')
  }
});
server.listen(3000,'localhost',() => {
  console.log('listening')
});

server.on('serverEvent',(data)=> {
  console.log(data)
});

server.emit('serverEvent','hello world');