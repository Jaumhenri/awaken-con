import { Router } from 'express'
import { ContactService } from '../services/ContactService.js'
import { ContactController } from '../controllers/ContactController.js'
import { validateBody } from '../middlewares/validateBody.js'

const router = Router()

const controller = new ContactController(new ContactService())

router.post('/', validateBody(['name', 'email', 'message']), controller.send)

export default router
