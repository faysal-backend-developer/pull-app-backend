import jwt, {Secret} from 'jsonwebtoken'

interface ITokenDataGiven {
  username: string | undefined
  email: string | undefined
}

export const generateToken = (
  payload: ITokenDataGiven,
  secret: Secret,
  expiresIn: string,
): string => {
  return jwt.sign(payload, secret, {
    expiresIn: expiresIn,
  })
}
