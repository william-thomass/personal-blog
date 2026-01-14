import type { Personal, PersonalBlogRepository } from "../repositories/personal-blog-repository.js"

interface FetchByRequest{
  id: string
}

interface FetchByResponse{
  article: Personal
}

export class FetchByArticleUseCase{
  constructor(private personalBlogRepository: PersonalBlogRepository){}

  async execute({
    id
  }:FetchByRequest):Promise<FetchByResponse>{

   

 const  article  = await this.personalBlogRepository.findById(id)

  if(!article){
  throw new Error('Not found article')
  }

    return  { article }
  }
}