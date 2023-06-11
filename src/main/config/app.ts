import { setupMiddlewares, setupRoutes } from '@/main/config'
import express from 'express'
import setupSwagger from './swagger'

export const app = express()
setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)
export default app
