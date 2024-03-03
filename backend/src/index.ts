import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { bookRouter } from './routes/blog';

const app=new Hono();

app.get("/",(c)=>{
  return c.text("Hello Hono")
})

app.post("/api/v1/signup",(c)=>{
  return c.text("Sign up")
})

app.post("/api/v1/signin",(c)=>{
  return c.text("Sign in")
})

app.post("/api/v1/blog",(c)=>{
  return c.text("blog")
})

app.put("/api/v1/blog",(c)=>{
  return c.text("Blog put")
})

app.get("/api/v1/blog/:id",(c)=>{
  return c.text("Blog id")
})

export default app
// export const app = new Hono<{
//   Bindings: {
//       DATABASE_URL: string;
//       JWT_SECRET: string;
//   }
// }>();

// app.route('/api/v1/user', userRouter)
// app.route('/api/v1/book', bookRouter)


