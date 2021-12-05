const childProcess = require('child_process');
const nodeChildProcess = childProcess.spawn('node', ['app2.js']);

nodeChildProcess.stdout.on('data', (data) => {
  console.log(data.toString());
  console.log(`nodeChildProcess process id ${nodeChildProcess.pid}`)
});

nodeChildProcess.on('exit', (code, signal) => {
  console.log(code);
})