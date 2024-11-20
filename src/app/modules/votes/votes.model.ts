import {model, Schema} from 'mongoose'
import {IVotes} from './votes.interface'

const voteSchema = new Schema<IVotes>(
  {
    name: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    options: {
      type: Map,
      of: [String],
      default: {},
    },
    createdBy: {
      type: String,
      default: 'Admin',
    },
  },
  {
    timestamps: true,
  },
)

export const Vote = model<IVotes>('Vote', voteSchema)
