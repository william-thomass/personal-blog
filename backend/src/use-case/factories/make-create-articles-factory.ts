import { FsRepository } from "../../repositories/fs/fs-repository.js";
import { CreateArticlesUseCase } from "../create-articles-use-case.js";

export function MakeCreateArticlesUseCase(){
  const fsRepository = new FsRepository()
  const useCase = new CreateArticlesUseCase(fsRepository)
  return useCase
} 