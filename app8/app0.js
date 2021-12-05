console.log(process.version)
console.log(process.versions);
console.log(process.platform);
console.log(process.execPath);
console.log(process.config);
console.log(process.pid);
console.log(process.title);
console.log(process.arch);
console.log(process.memoryUsage());
console.log(process.cwd());
// 设置工作目录
process.chdir('../');
console.log(process.cwd());
console.log(process.env);
//process.env.NODE_ENV = 'DEV'

console.log(process.uptime());
process.on('exit',() => {
  console.log('node process exiting')
});
//process.exit(0);

process.on('beforeExit',() => {
  console.log('node process beforeExit')
});
// 捕获报错
process.on('uncaughtException',(err) => {
  console.log(err)
  console.log('==========');
});
// 接受信号关闭
process.on('SIGINT',() => {
  console.log('SIGINT')
});
setTimeout(() => {
  console.log('timeout ')
},100000);