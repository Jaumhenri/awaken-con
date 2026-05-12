import { Router } from 'express'
import { TicketRepository } from '../repositories/TicketRepository.js'
import { TicketService } from '../services/TicketService.js'
import { TicketController } from '../controllers/TicketController.js'

const router = Router()

const controller = new TicketController(new TicketService(new TicketRepository()))

router.get('/', controller.getAll)
router.get('/:id', controller.getById)

export default router
