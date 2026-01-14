import path from "node:path";
import fs from 'node:fs/promises'
import type { Personal, PersonalBlogRepository } from "../personal-blog-repository.js";
import { randomUUID } from "node:crypto";


export class FsRepository implements PersonalBlogRepository{
 
  public filePath = path.resolve(process.cwd(), 'db.json')
  

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