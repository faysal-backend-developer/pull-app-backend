import {model, Model, Schema} from 'mongoose'
import {IUser} from './users.interface'

type UserModel = Model<IUser, object, object>

const userSchema = new Schema<IUser, UserModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    profilePicture: {
      type: String,
      default: null,
    },
    coins: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
)

export const user = model<IUser, UserModel>('User', userSchema)
