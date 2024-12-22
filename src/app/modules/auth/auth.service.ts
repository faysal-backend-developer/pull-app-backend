import {ILogin} from './auth.interface'
import {profile} from '../users/users.model'
import bcrypt from 'bcryptjs'

const loginUser = async (payload: ILogin): Promise<string> => {
  const user = await profile
    .findOne({username: payload.username}, {username: 1, password: 1})
    .lean()

  const isPasswordMatch = await bcrypt.compare(
    payload.password,
    String(user?.password),
  )
  if (!isPasswordMatch) {
    throw new Error('Invalid credentials')
  } else {
    return 'Authentication successful'
  }
}

export const authService = {
  loginUser,
}
