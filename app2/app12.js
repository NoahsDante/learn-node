const fs = require('fs');
const redStream = fs.createReadStream('./app12.js',{encoding:'utf8'});
redStream.on('open',(fd) => {
  console.log(fd)
});
redStream.on('ready',() => {
  console.log('ready');
});
redStream.on('data',(data) => {
  console.log(data)
});
redStream.on('end',() => {
  console.log('end')
});
redStream.on('close',() => {
  console.log('close')
})
redStream.on('error',(err) => {
  console.log(err)
})