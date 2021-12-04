const http = require('http');
const fs = require('fs');
const io = require('socket.io');

const server = http.createServer((req,res) => {
  res.writeHead(200,{'Content-Type':'text/html'});
  if(req.url == '/') {
    fs.readFile('./client.html','utf8',(err,data) => {
      if (err) return console.log('errr');
      res.end(data.toString())
    })
  } else {
    res.end('404')
  }
});

server.listen(9091,'localhost',() => {
  console.log('localhost:9091')
});

const socket = io.listen(server);

socket.on('connection',(so) => {
  console.log('socket connection ');
  so.on('message',(meg) => {
    console.log('server-socket-message',meg)
  });
  so.on('disconnect',() => {
    console.log('socket disconnect')
  })
  so.send('hello socket');

  so.emit('serverEvent','this is serverEvent');
  so.on('clientEvent',(data) => {
    console.log(JSON.stringify(data));
  });
  so.on('broadcastEventClient',(mes) =>{
    console.log('broadcastEventClient',mes);
    so.broadcast.emit('broadcastEventServer','you are good');
  })
})
