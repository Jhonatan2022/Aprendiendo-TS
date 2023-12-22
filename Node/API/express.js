const express = require('express')
const dittoJSON = require('./ditto.json')
const app = express()
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.use(express.json())
// Middleware
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // Solo llegan request que son POST y application/json
//   let body = ''

//   req.on('data', (chunk) => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('Not Found')
})

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`)
})
