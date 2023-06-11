import { type ISaveEntryRepository, type IGetAllEntryRepository } from '@/data/protocol'
import { type EntryType, type Entry } from '@/domain/entity'
import { type IGetAllEntry, type AddEntryNamespace, type GetAllEntryNamespace, type IAddEntry } from '@/domain/usecase'

export class EntryUseCase implements IAddEntry, IGetAllEntry {
  constructor (private readonly entryRepository: ISaveEntryRepository & IGetAllEntryRepository) {}

  async add ({ type, value }: AddEntryNamespace.Params): Promise<Entry> {
    const entry = { type: { id: type } as EntryType, value }
    return this.entryRepository.save(entry)
  }

  async get (params: GetAllEntryNamespace.Params): Promise<Entry[]> {
    return this.entryRepository.get(params)
  }
}
