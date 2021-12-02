const fs = require('fs');
// 检查文件是否存在
fs.access('./app0.js',(err,data) => {
  if(err) console.log(err);
  console.log('data',data)
})
fs.access('./app.js',(err,data) => {
  if(err) console.log(err);
  console.log('data',data)
})