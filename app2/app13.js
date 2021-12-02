const fs = require('fs');
const redStream = fs.createReadStream('./app12.js',{encoding:'utf8'});
const writeStream = fs.createWriteStream('mytest.txt',{encoding:'utf8'})

redStream.on('data',(data) => {
  console.log(data)
  writeStream.write(data,(err,data) => {
    console.log(data)
  });
});
