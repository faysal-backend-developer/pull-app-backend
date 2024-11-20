import mongoose from 'mongoose'

const dbConnection = async (url: string) => {
  try {
    await mongoose.connect(url)
    console.log(`Connected to ${url}`)
  } catch (error) {
    console.log(`Database connection error: ${error}`)
  }
}

export default dbConnection
