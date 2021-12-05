const childProcess = require('child_process');
// fork 只能执行node 命令 同时可以同学node 主子进程通信
const forkProcess = childProcess.fork('./app5',{silent:true});
forkProcess.on('message',(msg) => {
  console.log('master',msg)
});
forkProcess.send('hello world');

