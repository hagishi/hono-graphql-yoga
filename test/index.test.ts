import { Hono } from 'hono'
import { graphqlServer } from '../src'

const opts = {
  schema: {
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String!
      }
    `,
    resolvers: {
      Query: {
        hello: () => 'hello',
      },
    },
  },
}

describe('graphql middleware', () => {
  const app = new Hono()
  app.use('/graphql', graphqlServer(opts))

  it('Should be graphql query', async () => {
    const query = 'query { hello }'
    const body = {
      query: query,
    }

    const res = await app.request('http://localhost/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    expect(res).not.toBeNull()
    expect(res.status).toBe(200)
    expect(await res.text()).toBe('{"data":{"hello":"hello"}}')
  })
})
