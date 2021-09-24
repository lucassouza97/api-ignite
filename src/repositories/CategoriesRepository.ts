import { Category } from '../model/Category'
import { v4 as uuid } from 'uuid'
//DTO => data transfer object

interface ICreateCategoryDTO {
	name: string
	description: string
}
class CategoriesRepository {
	private categories: Category[]

	constructor() {
		this.categories = []
	}

	create({ name, description }: ICreateCategoryDTO): void {
		const category = new Category()

		Object.assign(category, {
			id: uuid(),
			name,
			description,
			created_at: new Date().toISOString(),
		})

		this.categories.push(category)
	}

	findAll(): Category[] {
		return this.categories
	}

	findByName(name: string): Category {
		const category = this.categories.find((category) => {
			return category.name === name
		})

		return category
	}
}

export { CategoriesRepository }
