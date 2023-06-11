import { EntryRepository } from '@/infra/db/repository'
import { type Controller } from '@/presentation/controller'
import dataSource from '@/main/config/ormconfig'
import { EntryUseCase } from '@/data/usecase'
import { GetAllEntryController } from '@/presentation/controller/get-all-entry-controller'

export const makeGetAllEntryController = (): Controller => {
  const entryRepsository = new EntryRepository(dataSource)
  const entryUseCase = new EntryUseCase(entryRepsository)
  return new GetAllEntryController(entryUseCase)
}
