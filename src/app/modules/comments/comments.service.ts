import {IComments} from './comments.interface'
import {Comments} from './comments.model'

const create = async (data: IComments): Promise<IComments | null> => {
  const result = await Comments.create(data)

  if (!result) {
    throw new Error('Could not create comments')
  } else {
    return result
  }
}

export const commentService = {
  create,
}
