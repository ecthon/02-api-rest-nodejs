import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify()
app.register(cookie)

app.addHook('preHandler', async (request) => {
  console.log(`[${request.method}] [${request.url}]`)
})

// Como os plugins no Fastify tem ordem de prioridade, é importante que sejam
// colocados abaixo de forma adequada.
// PLUGINS
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
