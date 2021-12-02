const fs = require('fs');
// 打开文件
fs.open('./test2.txt','r+',(err,fd) => {
  if(err) {
    console.log(err)
    return
  }
  console.log(fd)
})