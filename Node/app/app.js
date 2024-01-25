import express from 'express'

const app = express()
const port = process.env.PORT || 1234

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})
