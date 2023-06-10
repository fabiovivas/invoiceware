import { type Account } from '@/domain/entity/account'
import { EntitySchema } from 'typeorm'

export const AccountEntity = new EntitySchema<Account>({
  name: 'account',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid'
    }
  },
  relations: {
    type: {
      type: 'many-to-one',
      target: 'accountType',
      joinColumn: true,
      nullable: false
    }
  }
})
