import { Hono } from 'hono'

const app = new Hono()
// Writing middlewares in hono
async function authMiddleware(c:any,next:any){
  if(c.req.header("Authorization")){
    await next();
  }else{
    return c.text("Not authenticated......!");
  }
}
// app.use(authMiddleware);
app.get('/',authMiddleware,async (c) => {
  // const body = await c.req.json();

  // console.log(body);
  // console.log(c.req.header);
  // console.log(c.req.query);
  return c.text('Hello Hono!')
});
app.get("/hello",async (c)=>{
  return c.text("From hello.......!");
})

export default app
