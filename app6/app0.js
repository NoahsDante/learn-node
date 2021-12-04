const http = require('http');
const server = http.createServer();
server.on('request',(req,res) => {
  if(req.url == '/') {
    console.log('addlistener');
    res.end('end2')
  }
});
const listener = (req,res) => {
  if(req.url == '/') {
    console.log('hell world');
  }
}
server.on('request',listener);
// server.off('request',listener)

server.listen(3000,'localhost',() => {
  console.log('listening')
})