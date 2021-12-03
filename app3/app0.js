const buffer = Buffer.alloc(128)
// 返回字节数
const leng = buffer.write('hellowd哈哈','utf8');
console.log(leng)