import { FsRepository } from "../../repositories/fs/fs-repository.js";
import { FetchByArticleUseCase } from "../fetch-by-article-use-case.js";

export function MakeFetchByArticleUseCase(){
  const fsRepository = new FsRepository()
  const useCase = new FetchByArticleUseCase(fsRepository)
  return useCase
} 