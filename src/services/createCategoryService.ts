import { CategoriesRepository } from '../repositories/CategoriesRepository'

interface IRequest {
	name: string
	description: string
}

class CreateCategoryService {
	constructor(private categoriesRepository: CategoriesRepository) {}

	execute({ name, description }: IRequest): string {
		const categoryAlreadyExists = this.categoriesRepository.findByName(name)

		if (categoryAlreadyExists) {
			throw new Error('category already registered')
		}

		this.categoriesRepository.create({ name, description })

		return 'category created successfuly'
	}
}

export { CreateCategoryService }
