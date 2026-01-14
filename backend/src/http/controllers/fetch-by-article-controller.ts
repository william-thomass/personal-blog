import type { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod'
import { MakeFetchByArticleUseCase } from "../../use-case/factories/make-fetch-by-article-factory.js";

export async function FetchByArticleController(req: FastifyRequest, rep: FastifyReply){

const fetchByArticleParamsSchema = z.object({
  id: z.string().uuid()
})

const { id } = fetchByArticleParamsSchema.parse(req.params)

 const makeFetchByArticleUseCase = MakeFetchByArticleUseCase()
  const  article  = await makeFetchByArticleUseCase.execute({id})

  return rep.status(200).send(article)

}