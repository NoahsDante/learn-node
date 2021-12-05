const childProcess = require('child_process');
// 与exec 的区别是 它不会创建shell，而是会在创建新的进程 所以非常高效；
// 其实就是 spawn 与exec  结合 从api入参
childProcess.execFile('node',['app9'],(err,stdio,stderr) => {
  if(err) {
    console.log(stderr)
    return
  };
  console.log(stdio)
})
