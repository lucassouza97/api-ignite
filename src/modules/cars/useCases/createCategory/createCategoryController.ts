import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './createCategoryUseCase'

class CreateCategoryController {
	constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

	handle(req: Request, res: Response): Response {
		const { name, description } = req.body

		const response = this.createCategoryUseCase.execute({ name, description })

		return res.status(201).json({ message: response })
	}
}

export { CreateCategoryController }
