import { Category } from '../../model/Category'
import { v4 as uuid } from 'uuid'
import {
	ICategoriesRepository,
	ICreateCategoryDTO,
} from '../ICategoriesRepository'

//singleton

class CategoriesRepository implements ICategoriesRepository {
	private categories: Category[]

	private static INSTANCE: CategoriesRepository

	private constructor() {
		this.categories = []
	}

	public static getInstance(): CategoriesRepository {
		if (!CategoriesRepository.INSTANCE) {
			CategoriesRepository.INSTANCE = new CategoriesRepository()
		}

		return CategoriesRepository.INSTANCE
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

	list(): Category[] {
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
