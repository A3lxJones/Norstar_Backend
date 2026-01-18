import express from 'express'
import cors from 'cors'
import apiRouter from './routes'
import { logger } from './middleware/logger'
import { errorHandler } from './middleware/errorHandler'

const app = express()

app.use(cors({
  origin: 'http://localhost:3003',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

app.use(express.json())
app.use(logger)

app.use('/api', apiRouter)

app.use(errorHandler)

export default app