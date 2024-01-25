import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()
app.register(cookie)

// Como os plugins no Fastify tem ordem de prioridade, é importante que sejam
// colocados abaixo de forma adequada.
// PLUGINS
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

//

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Start ⚡ | HTTP Server Running!')
  })
