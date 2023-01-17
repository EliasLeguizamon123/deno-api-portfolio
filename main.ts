import { PrismaClient } from './generated/client/deno/edge.js'
import { Application, Router } from 'https://deno.land/x/oak@v11.1.0/mod.ts'
import { config } from "https://deno.land/std@0.171.0/dotenv/mod.ts";

const envVars = await config();

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: envVars.DATABASE_URL,
        },
    },
});

const app = new Application();
const router = new Router();

//* Setting Routes 

router
    .get("/", (context) => {
        context.response.body = "Welcome to my own Deno API";
    })
    .get("/projects", ((context) => {}))

//* Setting Middlewares

app.use(router.routes());
app.use(router.allowedMethods());

//* Start Server

await app.listen({ port: 8000 })