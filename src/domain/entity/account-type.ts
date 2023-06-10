import { type Account } from '@/domain/entity/account'

export type AccounType = {
  id?: number
  name: string
  account: Account[]
}
