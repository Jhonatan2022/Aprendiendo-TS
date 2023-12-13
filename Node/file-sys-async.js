const fs = require('node:fs')

// const text = fs.readFileSync('./os-info.mjs', 'utf-8') // sincrono (bloqueante)

console.log('Leyendo primer archivo...')
fs.readFile('./os-info.mjs', 'utf-8', (err, text) => {
  console.log(text)
}) // asincrono (no bloqueante)

console.log('cosas que hacer mientras se lee el archivo...')

console.log('Leyendo segundo archivo...')
fs.readFile('./file-system.js', 'utf-8', (err, text) => {
  console.log(text)
})
