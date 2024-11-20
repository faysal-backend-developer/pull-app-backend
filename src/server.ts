import app from './app'
import config from './config'
import dbConnection from './db'
import logger from './app/helper/winston/logger'

const server = async () => {
  try {
    await dbConnection(config.db_url as string)
    app.listen(config.port, () => {
      logger.info(`server listening on ${config.port}`)
    })
  } catch (error) {
    logger.error(`Server Error: ${error}`)
  }
}

server()
