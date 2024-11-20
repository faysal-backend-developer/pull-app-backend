import {Request, Response} from 'express'
import {commentService} from './comments.service'

const create = async (req: Request, res: Response) => {
  const {comments} = req.body
  if (!comments) {
    return res.status(400).json({message: 'Comments is required'})
  } else {
    const result = await commentService.create(comments)
    res.status(200).json({
      status: 200,
      message: 'Comments created successfully',
      data: result,
    })
  }
}

export const commentsController = {
  create,
}
