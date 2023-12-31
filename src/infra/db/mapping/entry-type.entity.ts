
import { type EntryType } from '@/domain/entity'
import { EntitySchema } from 'typeorm'

export const EntityTypeEntity = new EntitySchema<EntryType>({
  name: 'entryType',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: 'increment'
    },
    name: {
      type: String,
      length: 200,
      nullable: false
    }
  },
  relations: {
    entry: {
      type: 'one-to-many',
      target: 'entry',
      inverseSide: 'entryType'
    }
  }
})
