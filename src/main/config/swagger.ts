import { type Express } from 'express'
import { noCache } from '../middleware/no-cache'
import { serve, setup } from 'swagger-ui-express'

import swaggerConfig from '../swagger'

export default (app: Express): void => {
  app.use('/doc', noCache, serve, setup(swaggerConfig))
}
