import { Router } from 'express'
import {
  getFixtures,
  createFixture
} from '../controllers/fixturesController'

const router = Router()

router.get('/', getFixtures)
router.post('/', createFixture)

export default router