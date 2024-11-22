import express, {Request, Response} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import voteRouter from './app/modules/votes/votes.router'
import commentsRouter from './app/modules/comments/comments.router'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

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
app.use('/api/v1/vote', voteRouter)
app.use('/api/v1/comments', commentsRouter)

app.get('/api/v1/test-api', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Pull App Running from test API',
  })
})

// Global Error Handler
app.use(globalErrorHandler)

export default app
