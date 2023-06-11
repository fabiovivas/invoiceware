/* eslint-disable @typescript-eslint/no-misused-promises */
import { adaptRoute } from '@/main/adapter'
import { makeAddEntryController, makeGetAllEntryController } from '@/main/factory'
import { type Router } from 'express'

export default (router: Router): void => {
  router.post('/entry/add',
    adaptRoute(makeAddEntryController()))

  router.get('/entry/get-all',
    adaptRoute(makeGetAllEntryController()))
}
