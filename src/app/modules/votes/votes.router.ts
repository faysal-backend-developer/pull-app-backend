import {Router} from 'express'
import {voteController} from './votes.controller'

const voteRouter = Router()

voteRouter.post('/create', voteController.create)
voteRouter.get('/', voteController.allVotes)
voteRouter.delete('/delete/:id', voteController.voteDelete)
voteRouter.get('/:id', voteController.findOneVote)
voteRouter.patch('/update/:id', voteController.UpdateVote)

export default voteRouter
