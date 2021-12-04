const buffer = Buffer.from('hello');
const myObj = {};
const str = 'aaa';
const flag = true;
const count = 1;

console.log(typeof buffer)
console.log(typeof myObj)
console.log(typeof str)
console.log(typeof flag)
console.log(typeof count);

console.log(Buffer.isBuffer(buffer));
console.log(Buffer.isBuffer(myObj));
