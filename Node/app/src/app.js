import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import cookieParser from 'cookie-parser'
import express from 'express'
import morgan from 'morgan'

const app = express()
app.disable('x-powered-by')

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api', authRoutes)
app.use('/api', taskRoutes)

export default app
