import express, {Request, Response} from 'express'
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

app.get('/api/v1/test-api', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Pull App Running from test API',
  })
})

// ! Testing Units Router
// app.get('/test', async(req:Request, res: Response, next: NextFunction) => {
//! Test Function or anything
//   res.send("OK")
//   next()
// })

// Global Error Handler
app.use(globalErrorHandler)

export default app
