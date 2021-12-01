const fs = require('fs');
fs.open('./test2.txt','r+',(err,fd) => {
  if(err) {
    console.log(err)
    return
  }
  console.log(fd)
})