import type { FastifyInstance } from "fastify";
import { createArticlesController } from "./controllers/create-articles-controller.js";
import { FetchArticlesController } from "./controllers/fetch-articles-controller.js";
import { FetchByArticleController } from "./controllers/fetch-by-article-controller.js";
import { deleteArticleUseCaseArticleController } from "./controllers/delete-article-controller.js";

export function appRoutes(app: FastifyInstance){

  app.post('/new', createArticlesController)
  app.get('/admin', FetchArticlesController)
  app.get('/article/:id', FetchByArticleController)
  app.delete('/admin/:id', deleteArticleUseCaseArticleController)
}