import { type ISaveEntryRepository } from '@/data/protocol'
import { type Entry } from '@/domain/entity'
import { EntryEntity } from '@/infra/db/mapping'
import { type DataSource } from 'typeorm'

export class EntryRepository implements ISaveEntryRepository {
  constructor (private readonly dataSource: DataSource) {}

  async save (params: Entry): Promise<Entry> {
    return this.dataSource.getRepository<Entry>(EntryEntity).save(params)
  }
}
