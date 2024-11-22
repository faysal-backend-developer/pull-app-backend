import {RequestHandler} from 'express'
import {commentService} from './comments.service'
import ApiError from '../../errors/apiError'
import {StatusCodes} from 'http-status-codes'

const create: RequestHandler = async (req, res, next) => {
  try {
    const {comments} = req.body
    if (!comments) {
      throw new ApiError(StatusCodes.NO_CONTENT, 'Comments Data is required')
    } else {
      const result = await commentService.create(comments)
      res.status(200).json({
        status: 200,
        message: 'Comments created successfully',
        data: result,
      })
    }
  } catch (error) {
    next(error)
  }
}

export const commentsController = {
  create,
}
