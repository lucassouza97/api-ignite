import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IRequest {
	name: string
	description: string
}

class CreateCategoryUseCase {
	constructor(private categoriesRepository: ICategoriesRepository) {}

	execute({ name, description }: IRequest): string {
		const categoryAlreadyExists = this.categoriesRepository.findByName(name)

		if (categoryAlreadyExists) {
			throw new Error('category already registered')
		}

		this.categoriesRepository.create({ name, description })

		return 'category created successfully'
	}
}

export { CreateCategoryUseCase }
