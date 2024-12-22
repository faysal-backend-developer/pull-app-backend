import {ILogin} from './auth.interface'
import {profile} from '../users/users.model'
import bcrypt from 'bcryptjs'
import config from '../../../config'
import {generateToken} from '../../helper/jwt/generateToken'

const loginUser = async (
  payload: ILogin,
): Promise<{
  accessToken: string
  refreshToken?: string
}> => {
  const user = await profile
    .findOne({username: payload.username}, {username: 1, password: 1, email: 1})
    .lean()

  const isPasswordMatch = await bcrypt.compare(
    payload.password,
    String(user?.password),
  )
  if (!isPasswordMatch) {
    throw new Error('Invalid credentials')
  } else {
    // Create Access Token :
    const accessToken = generateToken(
      {username: user?.username, email: user?.email},
      config.jwt.jwt_secret_key!,
      config.jwt.jwt_expires!,
    )

    // Create Refresh Token :
    const refreshToken = generateToken(
      {username: user?.username, email: user?.email},
      config.jwt.jwt_refresh_secret_key!,
      config.jwt.jwt_refresh_expires!,
    )

    return {
      accessToken,
      refreshToken,
    }
  }
}

export const authService = {
  loginUser,
}
