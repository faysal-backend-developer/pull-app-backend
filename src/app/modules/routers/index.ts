import {Router} from 'express'
import userRouter from '../users/users.router'

const routers = Router()

const moduleRoutes = [
  {
    path: '/user',
    route: userRouter,
  },
]

moduleRoutes.forEach(route => routers.use(route.path, route.route))

export default routers
