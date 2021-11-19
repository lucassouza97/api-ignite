import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { CreateCategoryService } from '../modules/cars/services/createCategoryService'
import { Router } from 'express'

const categoriesRouter = Router()

const categoriesRepository = new CategoriesRepository()

categoriesRouter.post('/', (req, res) => {
	try {
		const { name, description } = req.body
		const createCategoryService = new CreateCategoryService(
			categoriesRepository
		)

		const response = createCategoryService.execute({ name, description })

		return res.status(201).json({ message: response })
	} catch (error) {
		return res.status(400).json({ message: error.message })
	}
})

categoriesRouter.get('/', async (req, res) => {
	const allCategories = categoriesRepository.list()

	return res.status(201).json(allCategories)
})

export default categoriesRouter
