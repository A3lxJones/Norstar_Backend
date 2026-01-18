import { Router } from 'express'
import fixturesRouter from './fixtures'
import healthRouter from './health'

const router = Router()

router.use('/health', healthRouter)
router.use('/fixtures', fixturesRouter)

export default router