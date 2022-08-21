import { createServer } from '@graphql-yoga/common'
import type { Handler } from 'hono'

type YogaOptions = Parameters<typeof createServer>[0]

export const graphqlServer = (options: YogaOptions): Handler => {
  return async (c) => {
    const yoga = createServer(options)
    const ctx = Object.prototype.hasOwnProperty.call(c, 'executionCtx') ? c.executionCtx : {}
    return yoga.handleRequest(c.req, {
      env: c.env,
      ctx,
    })
  }
}
