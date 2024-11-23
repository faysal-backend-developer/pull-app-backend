import {Router} from 'express'
import {userController} from './users.controller'

const userRouter = Router()

userRouter.post('/create', userController.createUser)
userRouter.get('/', userController.getAllUser)

export default userRouter
