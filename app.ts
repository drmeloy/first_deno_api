import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
const env = Deno.env.toObject();
const PORT = env.PORT || 4000;
const HOST = env.HOST || '127.0.0.1';

interface Dog {
  name: string,
  age: number
}

let dogs: Array<Dog> = [
  {
    name: 'Roger',
    age: 8
  },
  {
    name: 'Syd',
    age: 7
  }
]

const router = new Router();
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`);

await app.listen(`${HOST}:${PORT}`);
