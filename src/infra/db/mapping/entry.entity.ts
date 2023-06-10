import { type Entry } from '@/domain/entity/entry'
import { EntitySchema } from 'typeorm'

export const AccountEntity = new EntitySchema<Entry>({
  name: 'entry',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid'
    },
    value: {
      type: Number,
      nullable: false
    }
  },
  relations: {
    type: {
      type: 'many-to-one',
      target: 'entryType',
      joinColumn: true,
      nullable: false
    }
  }
})
