import { Router, type Express } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  readdirSync(join(__dirname, '../route'))
    .filter(file => !file.endsWith('.map'))
    .map(async file => {
      (await import(`../route/${file}`)).default(router)
    })
  app.use('/api', router)
}
