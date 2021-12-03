const buffer1 = Buffer.from('hello');
const buffer2 = Buffer.from('world');
const bufferArray = [buffer1,buffer2];
const bufferRes = Buffer.concat(bufferArray);
console.log(bufferRes.toString())
