import app from './server/index.js'
import { connectDB } from './db/index.js'

connectDB()
const port = process.env.PORT || 1234

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})