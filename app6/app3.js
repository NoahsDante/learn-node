const Events = require('events');
const events = new Events();
events.on('myEvent',() => {
  console.log(1)
});
events.on('myEvent',(data) => {
  console.log(2,data)
});
events.on('myEvent',(data,val) => {
  console.log(3,data,val)
});
console.log(events.listeners('myEvent'))
events.emit('myEvent','1',2,3)