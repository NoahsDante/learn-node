const fs = require('fs');
// 重命名
fs.rename('./hello.txt','./hello1.txt',(err) => {
  if(err) {
    throw err;
    return
  }
  // 读取文件状态
  fs.stat('./hello1.txt',(err,stats) => {
    if(err) {
      throw err;
      return
    }
    console.log('成功',stats)
  })
  console.log('成功')
})
