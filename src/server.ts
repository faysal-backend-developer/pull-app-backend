import app from './app'
import config from './config'
import dbConnection from './db'
import logger from './app/helper/winston/logger'
import {Server} from 'http'

// Uncaught Exception Handler
process.on('uncaughtException', error => {
  logger.error('Uncaught Exception detected...: ', error)
  process.exit(1)
})

let server: Server
const run = async () => {
  try {
    await dbConnection(config.db_url as string)
    server = app.listen(config.port, () => {
      logger.info(`server listening on ${config.port}`)
    })
  } catch (error) {
    logger.error(`Server Error: ${error}`)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        logger.error('Unhandled Rejection find....', error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

run()

process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server')
  if (server) {
    server.close()
  }
})
