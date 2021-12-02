const fs = require('fs');
// 添加文本内容
fs.appendFile('./info.txt','加入进去了\r\n','utf-8',(err,data) => {
  if(err) {
    console.log('err',err)
  } else {
    console.log(data);
  }
})