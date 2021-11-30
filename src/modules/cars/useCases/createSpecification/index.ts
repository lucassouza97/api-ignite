import { SpecificationRepository } from '../../repositories/implementations/SpecificationsRepository'
import { CreateSpecificationController } from './createSpecificationController'
import { CreateSpecificationUseCase } from './createSpecificationUseCase'

const specificationsRepository = new SpecificationRepository()
const createSpecificationUseCase = new CreateSpecificationUseCase(
	specificationsRepository
)
const createSpecificationController = new CreateSpecificationController(
	createSpecificationUseCase
)

export { createSpecificationController }
