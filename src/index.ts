import { Elysia } from 'elysia'

export const app = new Elysia()
  .get('/ping', () => 'pong')
  .get('*', () => 'Hello bun Elysia')
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
