import { Router } from 'express'
import ticketRoutes from './ticketRoutes.js'
import speakerRoutes from './speakerRoutes.js'
import contactRoutes from './contactRoutes.js'

const router = Router()

router.use('/tickets', ticketRoutes)
router.use('/speakers', speakerRoutes)
router.use('/contact', contactRoutes)

export default router
