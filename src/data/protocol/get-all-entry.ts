import { type Entry } from '@/domain/entity'
import { type EntryTypeEnum } from '@/domain/enum'

export interface IGetAllEntryRepository {
  get: (params: GetAllEntryRepositoryNamespace.Params) => Promise<GetAllEntryRepositoryNamespace.Result>
}

export namespace GetAllEntryRepositoryNamespace {
  export type Params = {
    type: EntryTypeEnum
  }

  export type Result = Entry[]
}
