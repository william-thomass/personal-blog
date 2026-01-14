
import { FsUserRepository } from "../../repositories/fs/fs-user-repository.js";
import { AuthenticateUseCase } from "../authenticate-use-case.js";


export function MakeAuthenticateUseCase(){
  const fsRepository = new FsUserRepository()
  const useCase = new AuthenticateUseCase(fsRepository)
  return useCase
} 