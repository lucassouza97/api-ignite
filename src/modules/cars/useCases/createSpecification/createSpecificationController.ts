import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from './createSpecificationUseCase'

class CreateSpecificationController {
	constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

	handle(req: Request, res: Response): Response {
		const { name, description } = req.body

		this.createSpecificationUseCase.execute({ name, description })

		return res.status(201).json({ message: 'created successfully' })
	}
}

export { CreateSpecificationController }
