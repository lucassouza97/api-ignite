import Router from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { CreateSpecificationService } from '../modules/cars/services/createSpecificationService'

const specificationsRouter = Router()

const specificationsRepository = new SpecificationRepository()

specificationsRouter.post('/', (req, res) => {
	const { name, description } = req.body

	const createSpecificationService = new CreateSpecificationService(
		specificationsRepository
	)

	createSpecificationService.execute({ name, description })

	return res.status(201).json({ message: 'created successfully' })
})

specificationsRouter.get('/', (req, res) => {})

export default specificationsRouter
