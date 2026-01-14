export interface User{
  email: string
  password: string
}


export interface UserBlogRepository{
  findByEmail(email: string):Promise<User | null>
  findAll():Promise<User[]>
}