import {IProfile} from './users.interface'
import {profile} from './users.model'

const createProfile = async (payload: IProfile): Promise<IProfile | null> => {
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
