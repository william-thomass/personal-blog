import { z } from 'zod'
import 'dotenv/config'
const envSchema =  z.object({
  NODE_ENV: z.enum(["development", "test", "prodution"]).default("development"),
  JWT_SECRET: z.string(),
  PORT:z.coerce.number().default(3333)
})


export const env = envSchema.parse(process.env) 