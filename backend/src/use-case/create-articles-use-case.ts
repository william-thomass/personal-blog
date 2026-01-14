import type { Personal, PersonalBlogRepository } from "../repositories/personal-blog-repository.js"

interface createRequest{
  title: string
  description: string
}

interface createResponse{
  articles: Personal
}

export class CreateArticlesUseCase{
  constructor(private personalBlogRepository: PersonalBlogRepository){}

  async execute({
    title,
    description,
  }:createRequest):Promise<createResponse>{

    if(! title || !description){
      throw new Error('Title or Description invalid!')
    }

    const  articles  = await this.personalBlogRepository.create({
      description,
      title
    })

    return { articles }
  }
}