import {model, Schema} from 'mongoose'
import {IProfile} from './users.interface'
import bcrypt from 'bcryptjs'
import config from '../../../config'

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

// Pre Hook Middleware
profileSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.salt_round))
  next()
})

export const profile = model<IProfile>('Profile', profileSchema)
