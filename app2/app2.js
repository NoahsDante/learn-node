const fs = require('fs');
fs.open('./test2.txt','r+',(err,fd) => {
  if(err) {
    console.log(err)
    return
  }
  console.log(fd)
  fs.close(fd,(err) => {
    if(err) {
      console.log(err)
      return
    }
    console.log('成功关闭')
  })
})