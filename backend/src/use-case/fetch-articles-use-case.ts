import type { Personal, PersonalBlogRepository } from "../repositories/personal-blog-repository.js"


interface FetchResponse{
  articles: Personal[]
}

export class FetchArticlesUseCase{
  constructor(private personalBlogRepository: PersonalBlogRepository){}

  async execute():Promise<FetchResponse>{

   

 const  articles  = await this.personalBlogRepository.findAll()

    return  { articles }
  }
}