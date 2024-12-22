import {Request, Response} from 'express'
import catchAsync from '../../utils/catchAsync'
import {authService} from './auth.service'

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const {user} = req.body
  const result = await authService.loginUser(user)
  res.send({
    status: 'success',
    data: result,
  })
})

export const authController = {
  loginUser,
}
