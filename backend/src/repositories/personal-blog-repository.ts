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
}