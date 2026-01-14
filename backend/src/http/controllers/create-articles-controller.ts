import type { FastifyReply, FastifyRequest } from "fastify";
import z from 'zod'
import { MakeCreateArticlesUseCase } from "../../use-case/factories/make-create-articles-factory.js";

export async function createArticlesController(req: FastifyRequest, rep: FastifyReply){
  const bodySchemaCreateArticles = z.object({
    title: z.string(),
    description: z.string()
  }) 

  const {title, description} = bodySchemaCreateArticles.parse(req.body)

  const makeCreateArticlesUseCase = MakeCreateArticlesUseCase()
  const  articles  = await makeCreateArticlesUseCase.execute({
    description,
    title
  })

  return rep.status(201).send(articles)

}