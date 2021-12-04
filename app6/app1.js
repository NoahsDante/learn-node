const http = require('http');
const events = require('events');
const server = http.createServer();

events.setMaxListeners(9);
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
console.log(events.defaultMaxListeners)
server.listen(3000,'localhost',() => {
  console.log('listening')
})