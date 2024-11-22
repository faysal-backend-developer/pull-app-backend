import {ErrorRequestHandler} from 'express'
import config from '../../config'
import {StatusCodes} from 'http-status-codes'
import handleMongooseValidationError from '../errors/handleMongooseValidationError'
import {IGenericErrorMessages} from '../interfaces/error.interface'
import ApiError from '../errors/apiError'

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR
  let message: string = 'Internal Server Error'
  let errorMessages: IGenericErrorMessages[] = []

  // Handle Mongoose Validation Error
  if (error?.name === 'ValidationError') {
    const simplifiedValidationError = handleMongooseValidationError(error)

    statusCode = simplifiedValidationError?.statusCode
    message = simplifiedValidationError.message
    errorMessages = simplifiedValidationError.errorMessages
  } else if (error instanceof ApiError) {
    statusCode = error.statusCode
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.node_env === 'development' ? error?.stack : undefined,
  })

  next()
}

export default globalErrorHandler
