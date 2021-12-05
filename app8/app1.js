const fs = require('fs');

const myFn = () => {
  console.log('=============');
  console.log('call Fn')
};
// 执行时机 在同步于异步之间
process.nextTick(myFn);

console.log(fs.readFileSync('./app1.js').toString('utf8'));
fs.readFile('./app1.js',(err,data) => {
  console.log(data.toString())
})