import type { Personal, PersonalBlogRepository } from "../repositories/personal-blog-repository.js"

interface UpdateRequest{
  id: string
  title: string
  description: string
}

interface UpdateResponse{
  article: Personal
}

export class UpdateArticlesUseCase{
  constructor(private personalBlogRepository: PersonalBlogRepository){}

  async execute({
    id,
    title,
    description,
  }:UpdateRequest):Promise<UpdateResponse>{

    if(!id ||!title || !description){
      throw new Error('Title or Description invalid!')
    }

    const  article  = await this.personalBlogRepository.update({
      id,
      description,
      title,
    })

    return { article }
  }
}