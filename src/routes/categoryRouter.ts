import { CategoriesRepository } from '../repositories/CategoriesRepository'
import { CreateCategoryService } from '../services/createCategoryService'
import { Router } from 'express'

const routes = Router()

const categoriesRepository = new CategoriesRepository()

routes.post('/', (req, res) => {
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

routes.get('/', async (req, res) => {
	const allCategories = await categoriesRepository.findAll()

	return res.status(201).json(allCategories)
})

export default routes
