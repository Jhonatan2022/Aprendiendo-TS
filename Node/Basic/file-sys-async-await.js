const { readFile } = require('node:fs/promises')

// IIFE - Immediately Invoked Function Expression
;(async () => {
  console.log('Leyendo primer archivo...')
  const text = await readFile('./os-info.mjs', 'utf-8')
  console.log('Primer texto', text)

  console.log('cosas que hacer mientras se lee el archivo...')

  console.log('Leyendo segundo archivo...')
  const text2 = await readFile('./file-system.js', 'utf-8')
  console.log('Segundo texto', text2)
})()
