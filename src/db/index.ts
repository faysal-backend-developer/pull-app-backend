import mongoose from 'mongoose'
import logger from '../app/helper/winston/logger'

const dbConnection = async (url: string) => {
  try {
    await mongoose.connect(url)
    logger.info(`Connected to ${url}`)
  } catch (error) {
    logger.error(`Database connection error: ${error}`)
  }
}

export default dbConnection
