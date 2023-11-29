import { describe, expect, it } from 'bun:test'
import { app } from '../src'

describe('Elysia', () => {
  it('return pong', async () => {
    const response: Response = await app.handle(
      new Request('http://localhost/ping'),
    )

    expect(await response.text()).toBe('pong')
  })
  it('return wildcard hello', async () => {
    const response: Response = await app.handle(
      new Request('http://localhost/test'),
    )

    expect(await response.text()).toBe('Hello bun Elysia')

    const response2: Response = await app.handle(
      new Request('http://localhost'),
    )

    expect(await response2.text()).toBe('Hello bun Elysia')

    const response3: Response = await app.handle(
      new Request('http://localhost/'),
    )

    expect(await response3.text()).toBe('Hello bun Elysia')
  })
})
