import type { FastifyInstance } from "fastify";
import { createArticlesController } from "./controllers/create-articles-controller.js";


export function appRoutes(app: FastifyInstance){

  app.post('/new', createArticlesController)

}