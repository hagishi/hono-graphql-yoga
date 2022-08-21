import { createServer } from '@graphql-yoga/common DENOIFY: DEPENDENCY UNMET (BUILTIN)'
import type { Handler } from 'https://raw.githubusercontent.com/honojs/hono/v2.0.6/deno_dist/mod.ts'

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
