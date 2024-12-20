import {Request, Response, NextFunction} from 'express'
import {userService} from './users.service'

const createProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const profileData = req.body.profile

    const result = await userService.createProfile(profileData)
    res.send({
      message: 'Profile created successfully',
      data: {
        name: result?.firstName,
      },
    })
  } catch (error) {
    next(error)
  }
}

export const userController = {
  createProfile,
}
