const buffer = Buffer.from('哈哈哈');
const jsonStr = JSON.stringify(buffer);
console.log(jsonStr);
const jsonObj = JSON.parse(jsonStr);
console.log(JSON.parse(jsonStr))
const buffer2 = Buffer.from(jsonObj);
console.log(buffer2.toString())