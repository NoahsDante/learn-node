const fs = require('fs');
fs.rename('./hello.txt','./hello1.txt',(err) => {
  if(err) {
    throw err;
    return
  }
  fs.stat('./hello1.txt',(err,stats) => {
    if(err) {
      throw err;
      return
    }
    console.log('成功',stats)
  })
  console.log('成功')
})
