import express, {NextFunction, Request, Response} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routers from './app/modules/routers/index'

const app = express()

// Default Middleware configuration
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  }),
)

// Third party middleware configuration
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Routers configuration
app.use('/api/v1/', routers)
// Index Router configuration
app.get('/api/v1/', (req: Request, res: Response) => {
  res.send('Welcome to the API')
})

// Testing Router configuration
app.get(
  '/api/v1/test-api',
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      message: 'Pull App Running from test API',
    })
    next()
  },
)

// Global Error Handler
app.use(globalErrorHandler)

export default app
