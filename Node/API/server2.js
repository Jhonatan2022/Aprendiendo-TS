const http = require('node:http')
const dittoJSON = require('./ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req
  const notFound = () => {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    return res.end('Not found')
  }

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          return notFound()
      }

    case 'POST':
      switch (url) {
        case '/pokemon': {
          //   const body = []
          break
        }

        default:
          return notFound()
      }
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log(
    `Servidor escuchando en http://localhost:${server.address().port}`
  )
})
