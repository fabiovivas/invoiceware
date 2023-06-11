import { type Entry } from '@/domain/entity'
import { type EntryTypeEnum } from '@/domain/enum'

export interface IGetAllEntry {
  get: (params: GetAllEntryNamespace.Params) => Promise<GetAllEntryNamespace.Result>
}

export namespace GetAllEntryNamespace {
  export type Params = {
    type: EntryTypeEnum
  }

  export type Result = Entry[]
}
