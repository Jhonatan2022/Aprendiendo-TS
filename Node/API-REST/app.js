const express = require('express')
const moviesJSON = require('./movies.json')

const app = express()
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.get('/movies', (req, res) => {
  res.json(moviesJSON)
})

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`)
})
