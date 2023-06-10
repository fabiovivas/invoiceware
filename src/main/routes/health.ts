import { type Router } from 'express'

export default (router: Router): void => {
  router.get('/health', (req, res) => res.status(200).json('I am on'))
}
