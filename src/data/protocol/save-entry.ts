import { type Entry } from '@/domain/entity'

export interface ISaveEntryRepository {
  save: (entry: Entry) => Promise<Entry>
}
