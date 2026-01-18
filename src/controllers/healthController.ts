import { Request, Response } from 'express'

// health check handler used by the routes router
export const health = (_req: Request, res: Response) => {
  res.json({ status: 'ok' })
}