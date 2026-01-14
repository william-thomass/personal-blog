import type { FastifyReply, FastifyRequest } from "fastify";
import { MakeFetchArticlesUseCase } from "../../use-case/factories/make-fetch-articles-factory.js";

export async function FetchArticlesController(req: FastifyRequest, rep: FastifyReply){

 const makeFetchArticlesUseCase = MakeFetchArticlesUseCase()
  const  articles  = await makeFetchArticlesUseCase.execute()

  return rep.status(200).send(articles)

}