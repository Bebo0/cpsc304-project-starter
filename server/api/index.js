import { Router } from 'express'

import users from './users'
import rushees from './rushees'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(rushees)

export default router
