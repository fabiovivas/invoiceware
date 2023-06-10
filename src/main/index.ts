/* eslint-disable @typescript-eslint/restrict-template-expressions */
import './config/module-alias'
import dataSource from '@/main/config/ormconfig'

dataSource.initialize()
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(process.env.PORT, () => { console.log(`Server running at port:${process.env.PORT}`) })
  })
  .catch(console.error)
