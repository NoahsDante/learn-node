const fs = require('fs');
// 删除文件
fs.unlink('./hello1.txt',(err) => {
  if(err) {
    throw err;
    return
  }
  console.log('success')
})