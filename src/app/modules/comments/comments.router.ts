import {Router} from 'express'
import {commentsController} from './comments.controller'

const commentsRouter = Router()

commentsRouter.post('/create', commentsController.create)

export default commentsRouter
