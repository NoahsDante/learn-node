/*
*  文件操作系统 fs 模块
*  最大可能的使用 异步版本
* */
const fs = require('fs');
fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data)
  }
});
try {
  console.log('readFileSync',fs.readFileSync('test.txt','utf8'))
}catch (e) {
  console.log(e)
}
// 直接覆盖
fs.writeFile('test1.txt','heheda -node',(err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('writeFile-success')
  }
});
// 追加内容
fs.writeFile('test2.txt','heheda -node2\r\n',{flag:'a'},(err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('writeFile-添加成功-success')
  }
});
