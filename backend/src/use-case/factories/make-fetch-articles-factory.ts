import { FsRepository } from "../../repositories/fs/fs-repository.js";
import { FetchArticlesUseCase } from "../fetch-articles-use-case.js";

export function MakeFetchArticlesUseCase(){
  const fsRepository = new FsRepository()
  const useCase = new FetchArticlesUseCase(fsRepository)
  return useCase
} 