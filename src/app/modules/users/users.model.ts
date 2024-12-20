import {model, Schema} from 'mongoose'
import {IProfile} from './users.interface'

const profileSchema = new Schema<IProfile>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: 'profile',
  },
)

export const profile = model<IProfile>('Profile', profileSchema)
