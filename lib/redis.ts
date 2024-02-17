import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eu2-holy-seal-32504.upstash.io',
  token: process.env.REDIS_KEY!,
})
