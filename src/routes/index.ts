import { Router } from 'express'
import category from './categoryRouter'

const routes = Router()

routes.use('/categories', category)

export default routes
