import config from '../../../config'
import {IProfile} from './users.interface'
import {profile} from './users.model'
import bcrypt from 'bcryptjs'

const createProfile = async (payload: IProfile): Promise<IProfile | null> => {
  payload.password = await bcrypt.hash(
    payload.password,
    Number(config.salt_round),
  )

  const result = await profile.create(payload)

  if (!result) {
    return null
  } else {
    return result
  }
}

export const userService = {
  createProfile,
}
