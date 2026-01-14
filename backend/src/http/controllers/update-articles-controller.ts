import type { FastifyReply, FastifyRequest } from "fastify";
import z, { ZodError } from 'zod'
import { MakeUpdateArticlesUseCase } from "../../use-case/factories/make-update-articles-factory.js";

export async function updateArticlesController(req: FastifyRequest, rep: FastifyReply){
  const bodySchemaUpdateArticles = z.object({
    title: z.string(),
    description: z.string()
  }) 

  const paramsSchemaUpdateArticles = z.object({
    id: z.string().uuid()
  })

  const { id } = paramsSchemaUpdateArticles.parse(req.params)

 const {title, description} = bodySchemaUpdateArticles.parse(req.body)

 if(Error instanceof ZodError){
  throw new Error('Id invalid')
 }

  const makeUpdateArticlesUseCase = MakeUpdateArticlesUseCase()
  const  articles  = await makeUpdateArticlesUseCase.execute({
    id,
    description,
    title
  })

  return rep.status(201).send(articles)

}