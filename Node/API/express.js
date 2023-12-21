const express = require('express')
const app = express()
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/pokemon', (req, res) => {
  let body = ''

  req.on('data', (chunk) => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    res.json(data)
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`)
})
