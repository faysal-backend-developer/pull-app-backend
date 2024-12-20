import {Router} from 'express'
import {userController} from './users.controller'

const router = Router()
router.post('/create', userController.createProfile)

export const userRouter = router
