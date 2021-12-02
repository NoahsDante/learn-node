const fs = require('fs');
// fs.mkdir('./mydir/hello',{recursive:true},(err) => {
//
// })
// 删除文件
fs.rmdir('./mydir',{recursive:true},(err) => {
  if(err) console.log(err);
  console.log('成功')
})