import type { FastifyReply, FastifyRequest } from "fastify";
import z from 'zod'
import { MakeAuthenticateUseCase } from "../../use-case/factories/make-authenticate-factory.js";

export async function AuthenticateUserController(req: FastifyRequest, rep: FastifyReply){
  const bodySchemaCreateArticles = z.object({
    email: z.string().email(),
    password: z.string()
  }) 

  const {email, password} = bodySchemaCreateArticles.parse(req.body)
  const makeAuthenticateUseCase = MakeAuthenticateUseCase()
  const  { user } = await makeAuthenticateUseCase.execute({
    email,
    password
  })

  const token = await rep.jwtSign({},{
     sign:{
      sub: user.email,
      expiresIn:'7d'
     }
  })



  return rep.status(200).send({token})

}