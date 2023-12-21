const http = require('node:http')
const dittoJSON = require('./ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req
  const notFound = () => {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
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
          let body = ''

          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })
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
