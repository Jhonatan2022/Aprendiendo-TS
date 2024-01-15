import express from 'express'
import logger from 'morgan'

const port = process.env.PORT ?? 1234
const app = express()
app.use(logger('dev'))
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/Client/index.html')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
