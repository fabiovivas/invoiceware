import { type ISaveEntryRepository } from '@/data/protocol'
import { type EntryType, type Entry } from '@/domain/entity'
import { type AddEntryNamespace, type IAddEntry } from '@/domain/usecase'

export class SaveEntry implements IAddEntry {
  constructor (private readonly entryRepository: ISaveEntryRepository) {}
  async add ({ type, value }: AddEntryNamespace.Params): Promise<Entry> {
    const entry = { type: { id: type } as EntryType, value }
    return this.entryRepository.save(entry)
  }
}
