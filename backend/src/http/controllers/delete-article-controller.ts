import type { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod'
import { MakeDeleteArticleUseCase } from "../../use-case/factories/make-delete-article-factory.js";

export async function deleteArticleUseCaseArticleController(req: FastifyRequest, rep: FastifyReply){

const deleteArticleParamsSchema = z.object({
  id: z.string().uuid()
})

const { id } = deleteArticleParamsSchema.parse(req.params)

 const makeDeleteArticleUseCase = MakeDeleteArticleUseCase()
  const  article  = await makeDeleteArticleUseCase.execute({id})

  return rep.status(200).send(article)

}