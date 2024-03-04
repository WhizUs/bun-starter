import { Elysia } from 'elysia'

export const app = new Elysia({
  serve: {
    hostname: '0.0.0.0',
  },
})
  .get('/ping', () => 'pong')
  .get('*', ({ query }) => {
    console.log(query)
    return 'Hello bun Elysia'
  })
  .post('*', ({ body }) => {
    console.log(body)
    return 'done'
  })
  .listen(3000)

const serverAddress: string = app.server?.url.toString() ?? '--unknown--'

console.log(
  `🦊 Elysia is running at ${serverAddress}`,
)
