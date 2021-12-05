[1,2,3,4,5].map((i) => {
  console.log(i)
});

process.on('message',(msg) => {
  console.log(msg);
  process.send('welcome')
});
//process.exit(0)