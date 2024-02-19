import { Elysia } from 'elysia'

export const app = new Elysia()
  .get('/ping', () => 'pong')
  .get('*', () => 'Hello bun Elysia')
  .listen(3000)

const serverAddress: string = app.server?.url.toString() ?? '--unknown--'

console.log(
  `🦊 Elysia is running at ${serverAddress}`,
)
