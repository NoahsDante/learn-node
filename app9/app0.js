const Koa = require('koa');
const app = new Koa();

app.use(async (ctx,next) => {
  console.log('myFn started');
  await next();
  console.log('myFn finished')
});
app.use(async (ctx,next) => {
  console.log('myFn2 started');
  await next();
  console.log('myFn2 finished')
});
app.use(async (ctx,next) => {
  console.log('myFn3 started');
  await next();
  console.log('myFn3 finished')
});

app.use(async (ctx) => {
 // ctx.body = 'Hello world';
  ctx.response.type = 'text/html';
  ctx.response.body = '<div>hell koa</div>'

});

app.listen(9000)