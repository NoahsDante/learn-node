const childProcess = require('child_process');
const lsChildProcess = childProcess.spawn('ls',['-al','./']);
lsChildProcess.stdout.on('data',(data) => {
  console.log(data.toString());
  console.log('childProcess pid',lsChildProcess.pid);
});
lsChildProcess.on('exit',(code,signal) => {
  console.log(code,signal)
});