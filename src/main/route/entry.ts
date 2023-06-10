/* eslint-disable @typescript-eslint/no-misused-promises */
import { adaptRoute } from '@/main/adapter'
import { makeAddEntryController } from '@/main/factory/add-entry-controller-factory'
import { type Router } from 'express'

export default (router: Router): void => {
  router.post('/entry/add',
    adaptRoute(makeAddEntryController()))
}
