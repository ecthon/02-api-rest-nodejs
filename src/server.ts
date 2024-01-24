import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

// Como os plugins no Fastify tem ordem de prioridade, é importante que sejam
// colocados abaixo de forma adequada.
// PLUGINS
app.register(transactionsRoutes)

//

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Start ⚡ | HTTP Server Running!')
  })
