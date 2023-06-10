import { setupMiddlewares, setupRoutes } from '@/main/config'
import express from 'express'

export const app = express()
setupMiddlewares(app)
setupRoutes(app)
export default app
