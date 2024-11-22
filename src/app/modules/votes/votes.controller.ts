import {RequestHandler} from 'express'
import {voteService} from './votes.service'

const create: RequestHandler = async (req, res): Promise<void> => {
  const {data} = req.body
  if (!data) {
    res.status(400).json({message: 'Data is required'})
  } else {
    const newVote = await voteService.create(data)
    res.status(200).json({
      status: 200,
      message: 'Vote created successfully',
      data: newVote,
    })
  }
}

const allVotes: RequestHandler = async (req, res): Promise<void> => {
  const result = await voteService.allVotes()
  if (!result) {
    res.status(404).json({message: 'No votes found'})
  } else {
    res.status(200).json({
      status: 200,
      message: 'Vote created successfully',
      data: result,
    })
  }
}

const voteDelete: RequestHandler = async (req, res): Promise<void> => {
  const {id} = req.params
  if (!id) {
    res.status(400).json({message: 'Id is required'})
  } else {
    const result = await voteService.deleteVotes(id)
    res.status(200).json({
      status: 200,
      message: 'Vote Deleted successfully',
      data: result,
    })
  }
}

const UpdateVote: RequestHandler = async (req, res): Promise<void> => {
  const {id} = req.params
  const {data} = req.body
  if (!id || !data) {
    res.status(400).json({message: 'Id and data are required'})
  } else {
    const result = await voteService.updateVote(id, data)
    res.status(200).json({
      status: 200,
      message: 'Vote Updated successfully',
      data: result,
    })
  }
}
const findOneVote: RequestHandler = async (req, res): Promise<void> => {
  const {id} = req.params
  if (!id) {
    res.status(400).json({message: 'Id is required'})
  } else {
    const result = await voteService.getOneVote(id)
    res.status(200).json({
      status: 200,
      message: 'Vote Get successfully',
      data: result,
    })
  }
}

export const voteController = {
  create,
  allVotes,
  voteDelete,
  UpdateVote,
  findOneVote,
}
