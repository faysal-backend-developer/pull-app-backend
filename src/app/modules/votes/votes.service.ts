import {IVotes} from './votes.interface'
import {Vote} from './votes.model'

const create = async (data: IVotes): Promise<IVotes | null> => {
  const result = await Vote.create(data)

  if (!result) {
    throw new Error(`Could not create Vote`)
  } else {
    return result
  }
}

const updateVote = async (
  id: string,
  data: Partial<IVotes>,
): Promise<IVotes | null> => {
  const result = await Vote.findByIdAndUpdate({_id: id}, data)
  if (!result) {
    throw new Error(`Could not find & Update Vote`)
  } else {
    return result
  }
}

const getOneVote = async (id: string): Promise<IVotes | null> => {
  const result = await Vote.findById({_id: id})
  if (!result) {
    throw new Error(`Could not find Vote`)
  } else {
    return result
  }
}

const allVotes = async (): Promise<IVotes[] | null> => {
  const result = await Vote.find()
  if (!result) {
    throw new Error(`Could not find`)
  } else {
    return result
  }
}

const deleteVotes = async (id: string) => {
  const result = await Vote.deleteOne({_id: id})
  if (!result) {
    throw new Error(`Could not delete Vote`)
  } else {
    return result
  }
}

export const voteService = {
  create,
  allVotes,
  deleteVotes,
  updateVote,
  getOneVote,
}
