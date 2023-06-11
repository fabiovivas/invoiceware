import { paths } from './path'
import { schemas } from './schema'
import { components } from './component'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Invoiceware - Documentation',
    description: 'This is Invoiceware product documentation',
    version: '1.0.0',
    termsOfService: '',
    contact: {
      name: 'API Support',
      email: 'fvivas1982@gmail.com.com',
      url: 'https://www.linkedin.com/in/fabiovivas1/'
    }
  },
  license: {
    name: '',
    url: ''
  },
  servers: [
    {
      url: '/api',
      description: 'Local Server'
    }
  ],
  paths,
  schemas,
  components
}
