import app from './app'
import config from './config'
import dbConnection from './db'

const server = async () => {
  try {
    await dbConnection(config.db_url as string)
    app..listen(config.port, () => {
      console.log(`server listening on ${config.port}`)
    })
  } catch (error) {
    console.log(`Server Error: ${error}`)
  }
}

server()
