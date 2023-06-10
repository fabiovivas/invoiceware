import { DataSource } from 'typeorm'

import dotenv from 'dotenv'
dotenv.config()

const postgresDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_DEV_HOST,
  port: 5432,
  username: process.env.DATABASE_DEV_USERNAME,
  password: process.env.DATABASE_DEV_PASSWORD,
  database: process.env.DATABASE_DEV_DATABASE,
  entities: ['src/infra/db/mapping/**/*'],
  migrations: ['src/infra/db/migration/**/*']
})

void postgresDataSource.initialize()
export default postgresDataSource
