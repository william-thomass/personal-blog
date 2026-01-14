
import { app } from './app.js'
import { appRoutes } from './http/routes.js'
import { ZodError } from 'zod'

const PORT = 3000

app.setErrorHandler((error,_,rep)=>{
  if(error instanceof ZodError){
    return rep.status(400).send({message:'Validation error', issues: error.format()})
  }
  return rep.status(500).send({message:'Internal server error'})
})

app.register(appRoutes)

app.listen({
  host: '0.0.0.0',
  port: PORT,
}).then(()=>{
  console.log(`Server is running on port: ${PORT}`)
})

