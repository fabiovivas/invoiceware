import { type GetAllEntryRepositoryNamespace, type IGetAllEntryRepository, type ISaveEntryRepository } from '@/data/protocol'
import { type Entry } from '@/domain/entity'
import { EntryEntity } from '@/infra/db/mapping'
import { type DataSource } from 'typeorm'

export class EntryRepository implements ISaveEntryRepository, IGetAllEntryRepository {
  constructor (private readonly dataSource: DataSource) { }

  async save (params: Entry): Promise<Entry> {
    return this.dataSource.getRepository<Entry>(EntryEntity).save(params)
  }

  async get (params: GetAllEntryRepositoryNamespace.Params): Promise<Entry[]> {
    return await this.dataSource.getRepository<Entry>(EntryEntity).find({
      where: { type: { id: params.type } }
    })
  }
}
