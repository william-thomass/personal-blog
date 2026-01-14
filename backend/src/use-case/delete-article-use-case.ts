import type { Personal, PersonalBlogRepository } from "../repositories/personal-blog-repository.js"

interface DeleteArticleRequest{
  id: string
}

interface DeleteArticleResponse{
  article: Personal
}

export class DeleteArticleUseCase{
  constructor(private personalBlogRepository: PersonalBlogRepository){}

  async execute({
    id
  }:DeleteArticleRequest):Promise<DeleteArticleResponse>{

   

 const  article  = await this.personalBlogRepository.delete(id)

  if(!article){
  throw new Error('Not found article')
  }

    return  { article }
  }
}