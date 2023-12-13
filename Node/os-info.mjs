// mjs para poder usar ES6 modules
// const os = require('node:os')
// ctrl + . para convertir a import
import { uptime, platform, release, arch } from 'node:os'

console.log('Sistema operativo: ', platform())
console.log('Versión del sistema: ', release())
console.log('Arquitectura del sistema: ', arch())
console.log('Días encendido: ', uptime() / 60 / 60 / 24)