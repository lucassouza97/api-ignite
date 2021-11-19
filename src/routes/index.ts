import { Router } from 'express'
import category from './categoryRouter'
import specifications from './specificationRouter'

const routes = Router()

routes.use('/categories', category)
routes.use('/specifications', specifications)

export default routes
