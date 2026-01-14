import type { User, UserBlogRepository } from "../repositories/user-blog-repository.js"

interface AuthenticateRequest {
  email: string
  password: string
}

interface AuthenticateResponse{

  user: User
}

export class AuthenticateUseCase{
  constructor(private userBlogRepository: UserBlogRepository){}

  async execute({
    email,
    password
  }:AuthenticateRequest):Promise<AuthenticateResponse>{


    const user = await this.userBlogRepository.findByEmail(email)

    if(!user){
      throw new Error('Invalid credentials.')
    }

    if(user.password !== password){
       throw new Error('Invalid credentials.')
    }

    return { user }

  }
}
