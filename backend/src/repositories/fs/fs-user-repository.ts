import path from "node:path";
import fs from 'node:fs/promises'
import type { User, UserBlogRepository } from "../user-blog-repository.js";



export class FsUserRepository implements UserBlogRepository{
  public filePath = path.resolve(process.cwd(), 'user.json')
  
  async findByEmail(email: string): Promise<User | null> {
      

    try {
      const users =  await this.findAll()
      const user = users.find(item => item.email === email)
     

      return user || null
      
    } catch (error) {
      
      return null
    }

  }

  async findAll(): Promise<User[]> {
    try {
      const file =  await fs.readFile(this.filePath, 'utf-8')
      const user: User[] = JSON.parse(file)
      return user
    } catch (error) {
      return []
    }
  }

  
  
}