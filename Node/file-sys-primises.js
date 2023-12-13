const fs = require('node:fs/promises')
// const { promisify } = require('node:util')
// const readFile = promisify(fs.readFile) solo en modulos nativos que no tienen promesas

console.log('Leyendo primer archivo...')
fs.readFile('./os-info.mjs', 'utf-8').then((text) => {
  console.log(text)
})

console.log('cosas que hacer mientras se lee el archivo...')

console.log('Leyendo segundo archivo...')
fs.readFile('./file-system.js', 'utf-8').then((text) => {
  console.log(text)
})
