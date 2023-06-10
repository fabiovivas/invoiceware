import { type EntryType } from '@/domain/entity/entry-type'

export type Entry = {
  id?: string
  value: number
  type: EntryType
}
