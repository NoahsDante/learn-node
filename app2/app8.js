const fs = require('fs');
// 查询文件
fs.readdir('./', (err, file) => {
  if (err) console.log(err);
  console.log(file)
})