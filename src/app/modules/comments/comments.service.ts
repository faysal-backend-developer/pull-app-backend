import {IComments} from './comments.interface'
import {Comments} from './comments.model'
import ApiError from '../../errors/apiError'
import {StatusCodes} from 'http-status-codes'

const create = async (data: IComments): Promise<IComments | null> => {
  const result = await Comments.create(data)

  if (!result) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Could not create comments')
  } else {
    return result
  }
}

export const commentService = {
  create,
}
