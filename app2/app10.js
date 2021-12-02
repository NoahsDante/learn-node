const fs = require('fs');
// 查看文件路径
fs.realpath('app0.js',(err,resolution) => {
  if(err) console.log(err);
  console.log(resolution)
});