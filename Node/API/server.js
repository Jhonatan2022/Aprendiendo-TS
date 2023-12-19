const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  if (req.url === '/') {
    res.end('Bienvenido a la parte principal')
  } else if (req.url === '/contacto') {
    res.end('Bienvenido a la página de contacto')
  } else {
    res.end('No se ha encontrado la página')
  }
}  

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(
    `Servidor escuchando en http://localhost:${server.address().port}`
  )
})
