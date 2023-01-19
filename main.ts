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
    //* Routes projects
    .get("/projects", async (context) => {
        const projects = await prisma.projects.findMany();

        context.response.body = { status: 201, data: projects };
    })
    .get("/projects/:id", async (context) => {
        const { id } = context.params;

        const project = await prisma.projects.findUnique({
            where: {
                id: id
            }
        })

        context.response.body = { status: 20, data: project };
    })
    .post("/projects", async (context) => {
        const values = context.request.body();

        if(!context.request.hasBody){
            context.response.body = { status: 400, data: 'no data provide' }
        }

        const body = await values.value

        const result = await prisma.projects.create({
            data: body
        })

        context.response.body = { status: 201, data: result };
    })
    //* Routes timeline
    .get("/timeline", async (context) => {
        const timeline = await prisma.timeline.findMany();

        context.response.body = timeline;
         
    })
    .post("/timeline",  async (context) => {
        const value = context.request.body();

        if(!context.request.hasBody){
            context.response.body = {status: 400, data: 'no data provide'}
        }

        const body = await value.value;
        
        const result = await prisma.timeline.create({
            data: body
        })

        context.response.body = { status: 201, data: result };
    })
    .delete("/timeline/:id", async (context) => {
        const { id } = context.params;

        const timeline = await prisma.timeline.delete({
            where: {
                id: id
            }
        })

        context.response.body = { status: 202, data: timeline };
    })

//* Setting Middlewares

app.use(router.routes());
app.use(router.allowedMethods());

//* Start Server

await app.listen({ port: 8000 })