import mongoose from 'mongoose'
import {
  IGenericErrorMessages,
  IGenericErrorResponse,
} from '../interfaces/error.interface'
import {StatusCodes} from 'http-status-codes'

const handleMongooseValidationError = (
  error: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  // Extracting the errors from the validation error
  const errors: IGenericErrorMessages[] = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      // Type guard to handle ValidatorError
      if (el instanceof mongoose.Error.ValidatorError) {
        return {
          path: el.path, // ValidatorError has a 'path' field
          message: el.message, // ValidatorError has a 'message' field
        }
      }

      // Type guard to handle CastError
      if (el instanceof mongoose.Error.CastError) {
        return {
          path: el.path, // CastError has a 'path' field
          message: `Invalid value for ${el.path}: ${el.value}`, // CastError message can include the invalid value
        }
      }

      // Fallback return if it's neither type (shouldn't really happen)
      return {
        path: '',
        message: 'Unknown error',
      }
    },
  )

  return {
    statusCode: StatusCodes.BAD_REQUEST,
    message: 'Validation Error',
    errorMessages: errors,
  }
}

export default handleMongooseValidationError
