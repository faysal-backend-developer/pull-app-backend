import {user} from './users.model'
const findLastUserId = async () => {
  const lastUser = await user.findOne().sort({id: -1}).select('id').exec()
  return lastUser ? lastUser.id : null
}

export const generateNewUserId = async (): Promise<string> => {
  const lastUserId = await findLastUserId()
  const newId = (lastUserId ? Number(lastUserId) + 1 : 1)
    .toString()
    .padStart(4, '0')
  return newId
}
