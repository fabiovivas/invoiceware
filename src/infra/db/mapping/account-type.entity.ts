import { type AccounType } from '@/domain/entity/account-type'
import { EntitySchema } from 'typeorm'

export const AccounTypeEntity = new EntitySchema<AccounType>({
  name: 'accountType',
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
    account: {
      type: 'one-to-many',
      target: 'account',
      inverseSide: 'accountType'
    }
  }
})
