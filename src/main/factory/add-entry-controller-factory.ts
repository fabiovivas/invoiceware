import { EntryRepository } from '@/infra/db/repository'
import { AddEntryController, type Controller } from '@/presentation/controller'
import dataSource from '@/main/config/ormconfig'
import { EntryUseCase } from '@/data/usecase'

export const makeAddEntryController = (): Controller => {
  const entryRepsository = new EntryRepository(dataSource)
  const entryUseCase = new EntryUseCase(entryRepsository)
  return new AddEntryController(entryUseCase)
}
