import {Request, Response} from 'express'
import catchAsync from '../../utils/catchAsync'
import {authService} from './auth.service'
import config from '../../../config'

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const {user} = req.body
  const result = await authService.loginUser(user)

  const {refreshToken, ...data} = result

  res.cookie('refreshToken', refreshToken, {
    secure: config.node_env === 'development' ? false : true,
    httpOnly: true,
  })

  res.send({
    status: 'success',
    data: data,
  })
})

export const authController = {
  loginUser,
}
