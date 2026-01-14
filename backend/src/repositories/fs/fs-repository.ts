import path from "node:path";
import fs from 'node:fs/promises'
import type { Personal, PersonalBlogRepository} from "../personal-blog-repository.js";
import { randomUUID } from "node:crypto";



export class FsRepository implements PersonalBlogRepository{
  public filePath = path.resolve(process.cwd(), 'db.json')
  
  
  async update(data: Personal): Promise<Personal> {
    const articles = await this.findAll()

    const updateArticle = articles.map( item => {
      if(item.id === data.id){
        return {
          ...item,
          ...data,
          updatedAt: new Date()
        }
      }

      return item
    })

    const articleExists = articles.some( item => item.id === data.id)
    if(!articleExists){
      throw new Error('Article Not found')
    }

    await fs.writeFile(
      this.filePath,
      JSON.stringify(updateArticle, null, 2),
      'utf-8',
    )
  
    return {...data, updatedAt: new Date() }
  }

  async delete(id: string): Promise<Personal> {
    const articles = await this.findAll()

    const article = await this.findById(id)

    const newArticles = articles.filter(item => item.id !== id)
  
    await fs.writeFile(
      this.filePath,
      JSON.stringify(newArticles, null, 2),
      'utf-8'
    )

    return article
  
  }


   async findById(id: string): Promise<Personal> {
    const articles = await this.findAll()
    const article = articles.find(item => item.id === id)

    if(!article || undefined){
      throw new Error('Id invalid!')
    }

    return article
  }

   async findAll(): Promise<Personal[]> {
    try {
      const file =  await fs.readFile(this.filePath, 'utf-8')
      const articles: Personal[] = JSON.parse(file)
      return articles
    } catch (error) {
      return []
    }
  }

  async create(articles: Personal): Promise<Personal> {
  const file = await this.findAll()

   const newArticles = {
      ...articles,
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    file.push(newArticles)

    await fs.writeFile(
      this.filePath,
      JSON.stringify(file, null, 2),
      'utf-8'
    )

    return newArticles

  }
  
}