import { Router } from 'express'
import { SpeakerRepository } from '../repositories/SpeakerRepository.js'
import { SpeakerService } from '../services/SpeakerService.js'
import { SpeakerController } from '../controllers/SpeakerController.js'

const router = Router()

const controller = new SpeakerController(new SpeakerService(new SpeakerRepository()))

router.get('/', controller.getAll)

export default router
