import {Router} from 'express'
import {userRouter} from '../users/users.router'
import {authRouter} from '../auth/auth.router'

const routers = Router()

const moduleRoutes = [
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/auth',
    route: authRouter,
  },
]

moduleRoutes.forEach(route => routers.use(route.path, route.route))

export default routers
