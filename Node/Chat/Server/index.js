import express from 'express'
import logger from 'morgan'
import { Server } from 'socket.io'
import { createServer } from 'node:http'

const port = process.env.PORT ?? 1234

const app = express()
const server = createServer(app)
const io = new Server(server, {
  connectionStateRecovery: {}
})
app.use(logger('dev'))

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })
})

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/Client/index.html')
})

server.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
