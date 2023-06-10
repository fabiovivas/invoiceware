import { type Entry } from '@/domain/entity/entry'

export type EntryType = {
  id?: number
  name: string
  entry: Entry[]
}
