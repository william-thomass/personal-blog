import fastifyJwt from '@fastify/jwt'
import Fastify from 'fastify'
import { ZodError } from 'zod'
import { appRoutes } from './http/routes.js'
import { env } from './env/env.js'

export const app = Fastify()

app.register(appRoutes)

app.setErrorHandler((error,_,rep)=>{
  if(error instanceof ZodError){
    return rep.status(400).send({message:'Validation error', issues: error.format()})
  }else if(error instanceof Error){
    return rep.status(400).send({message:error.message})
  }
   return rep.status(500).send({message:"Internal Server Error."})
})

app.register(fastifyJwt,{
  secret: env.JWT_SECRET
})

