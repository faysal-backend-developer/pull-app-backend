import {IUser} from './users.interface'
import {user} from './users.model'
import ApiError from '../../errors/apiError'
import {StatusCodes} from 'http-status-codes'
import {generateNewUserId} from './users.utils'

const create = async (payload: IUser): Promise<IUser | null> => {
  payload.id = await generateNewUserId()
  const newUser = await user.create(payload)
  if (!newUser) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'User is Not Created')
  } else {
    return newUser
  }
}

const getAllUser = async (): Promise<IUser[] | null> => {
  const users = await user.find()
  if (!users) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'User is Not Found')
  } else {
    return users
  }
}

export const userService = {
  create,
  getAllUser,
}
