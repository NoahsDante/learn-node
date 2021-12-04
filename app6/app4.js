const Events = require('events');
const events = new Events();
// 每次新增事件，都会执行
events.once('newListener',(ev,lister) => {
  if(ev == 'myEvent') {
    events.on('myEvent',() => {
      console.log('hello')
    })
  }
});
events.on('myEvent',() => {
  console.log('world')
});
events.emit('myEvent')