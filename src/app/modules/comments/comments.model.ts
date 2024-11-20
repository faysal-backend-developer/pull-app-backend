import {model, Schema} from 'mongoose'
import {IComments} from './comments.interface'

const commentsSchema = new Schema<IComments>(
  {
    voteId: {
      type: String,
      required: true,
    },
    comments: [
      {
        userId: {type: String, required: true},
        comment: {type: String, required: true},
      },
    ],
  },
  {
    timestamps: true,
  },
)

export const Comments = model<IComments>('Comments', commentsSchema)
