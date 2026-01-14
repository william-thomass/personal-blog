import type { FastifyInstance } from "fastify";
import { createArticlesController } from "./controllers/create-articles-controller.js";
import { FetchArticlesController } from "./controllers/fetch-articles-controller.js";
import { FetchByArticleController } from "./controllers/fetch-by-article-controller.js";
import { deleteArticleUseCaseArticleController } from "./controllers/delete-article-controller.js";
import { updateArticlesController } from "./controllers/update-articles-controller.js";
import { AuthenticateUserController } from "./controllers/authenticate-controller.js";
import { verifyJwt } from "./middleware/verify-jwt.js";



export function appRoutes(app: FastifyInstance){
  // public
  app.post('/sessions', AuthenticateUserController)
  app.get('/home', FetchArticlesController)
  app.get('/article/:id', FetchByArticleController)
  

  app.register(async (adminRoutes)=>{

    adminRoutes.addHook('onRequest', verifyJwt)

    adminRoutes.post('/new', createArticlesController)
    adminRoutes.get('/admin', FetchArticlesController)
    adminRoutes.delete('/admin/:id', deleteArticleUseCaseArticleController)
    adminRoutes.put('/edit/:id', updateArticlesController)
  })
}