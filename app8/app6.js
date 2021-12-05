const childProcess = require('child_process');
// exec 有回调 可以输入输出
childProcess.exec('node app7',(err,stdio,stderr) => {
  if(err) {
    console.log(stderr)
    return
  }
  console.log(stdio);
})