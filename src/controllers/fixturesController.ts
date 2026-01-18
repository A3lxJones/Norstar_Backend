import { Request, Response } from 'express'
import { fixtures } from '../data/fixtures'
import { Fixture } from '../types/Fixture'

export function getFixtures(req: Request, res: Response) {
  res.json(fixtures)
}

export function createFixture(req: Request, res: Response) {
  const { opponent, date, location } = req.body

  // Basic validation
  if (!opponent || !date || !location) {
    return res.status(400).json({
      error: 'opponent, date and location are required'
    })
  }

  const newFixture: Fixture = {
    id: fixtures.length + 1,
    opponent,
    date,
    location
  }

  fixtures.push(newFixture)

  res.status(201).json(newFixture)
}