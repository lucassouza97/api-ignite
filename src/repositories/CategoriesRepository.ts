import { Category } from '../model/Category'

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
			name,
			description,
			created_at: new Date().toISOString(),
		})

		this.categories.push(category)

		console.log('Categoria inserida com sucesso', category)
	}
}

export { CategoriesRepository }
