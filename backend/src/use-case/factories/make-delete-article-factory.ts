import { FsRepository } from "../../repositories/fs/fs-repository.js";
import { DeleteArticleUseCase } from "../delete-article-use-case.js";


export function MakeDeleteArticleUseCase(){
  const fsRepository = new FsRepository()
  const useCase = new DeleteArticleUseCase(fsRepository)
  return useCase
} 