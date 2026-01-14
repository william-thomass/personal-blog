import { FsRepository } from "../../repositories/fs/fs-repository.js";
import { UpdateArticlesUseCase } from "../update-articles-use-case.js";

export function MakeUpdateArticlesUseCase(){
  const fsRepository = new FsRepository()
  const useCase = new UpdateArticlesUseCase(fsRepository)
  return useCase
} 