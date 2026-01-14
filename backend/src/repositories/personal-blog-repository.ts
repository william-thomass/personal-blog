export interface Personal {
id?: string
title: string
description: string
createdAt?: Date
updatedAt?: Date

}

export interface PersonalBlogRepository{
  create(articles: Personal): Promise<Personal> 
  findAll():Promise<Personal[]>
  findById(id: string):Promise<Personal | null>
  delete(id: string):Promise<Personal | null>
  update(data: Personal):Promise<Personal>
 
}