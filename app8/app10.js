const cluster = require('cluster');
const http = require('http');
const os = require('os');

const cupCount = os.cpus().length;

if(cluster.isMaster) {
  for(let i = 0; i < cupCount;++i) {
    cluster.fork();
  };
  cluster.on('exit',(worker,stdio,stderr) => {
    console.log(worker.process.pid);
  })
} else {
  const server  = http.createServer((req,res) => {
    let data = '';
    req.on('data',(chunk) => {
      data += chunk;
    });
    req.on('end',() => {
      res.end(`${process.pid}`)
    })
  });
  // 是主进程创建创建9000
  server.listen(9000,() => {
    console.log('listening 9000')
  });
}