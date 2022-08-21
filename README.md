# graphql-yoga middleware for Hono

graphql-yoga middleware for [Hono](https://github.com/honojs/hono).

## Usage

```ts
import { graphqlServer } from '@honojs/graphqlyoga'
import { Hono } from 'hono'

const app = new Hono()

app.use('*', graphqlServer({
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
})
app.get('/', (c) => c.text('foo'))

export default app
```

## Author

hagishi

## License

MIT
