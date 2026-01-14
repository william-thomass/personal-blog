import type { FastifyReply, FastifyRequest } from 'fastify'
import { app } from './app.js'
import { appRoutes } from './http/routes.js'

const PORT = 3000

app.register(appRoutes)

app.listen({
  host: '0.0.0.0',
  port: PORT,
}).then(()=>{
  console.log(`Server is running on port: ${PORT}`)
})

app.get('/',(req: FastifyRequest, rep: FastifyReply)=>{
  rep.send('Hello World!')
})