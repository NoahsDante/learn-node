const fs = require('fs');
fs.unlink('./hello.txt',(err) => {
  if(err) {
    throw err;
    return
  }
  console.log('success')
})