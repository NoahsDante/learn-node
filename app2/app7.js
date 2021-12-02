const fs = require('fs');
// 递归创建 文件夹
fs.mkdir('mydir/hello',{recursive:true},(err) => {
  if(err) console.log(err)
})