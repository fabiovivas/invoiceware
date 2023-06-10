import { type Entry } from '@/domain/entity'
import { type EntryTypeEnum } from '@/domain/enum'

export interface IAddEntry {
  add: (params: AddEntryNamespace.Params) => Promise<AddEntryNamespace.Result>
}

export namespace AddEntryNamespace {
  export type Params = {
    type: EntryTypeEnum
    value: number
  }

  export type Result = Entry
}
