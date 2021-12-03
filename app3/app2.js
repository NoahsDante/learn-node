const buffer = Buffer.alloc(3);
// ascii 码
buffer[0] = 65;
buffer[1] = 66;
buffer[2] = 67;

//
console.log(buffer.toString('utf-8',0,1))