// import catchAsync from "../../utils/catchAsync";

import {userService} from './users.service'
import sendResponse from '../../utils/sendResponse'
import {IUser} from './users.interface'
import {StatusCodes} from 'http-status-codes'
import {Request, Response} from 'express'
import catchAsync from '../../utils/catchAsync'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const {user} = req.body
  const result = await userService.create(user)
  sendResponse<Partial<IUser>>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User created successfully!',
    data: {
      userName: result?.userName,
      name: result?.name,
      email: result?.email,
      id: result?.id,
    },
  })
})

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const users = await userService.getAllUser()
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Users retrieved successfully!',
    data: users,
  })
})

export const userController = {
  createUser,
  getAllUser,
}
