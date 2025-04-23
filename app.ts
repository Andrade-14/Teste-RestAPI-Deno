import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const app = new Application();

// Middleware para log de requisições
app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`);
  await next();
});

// Rotas
app.use(router.routes());
app.use(router.allowedMethods());

console.log("Servidor rodando em http://localhost:8000");
await app.listen({ port: 8000 });