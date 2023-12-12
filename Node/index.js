// mjs para poder usar ES6 modules
// import { Node } from './Node.js';
const os = require('node:os')

// console.log('Sistema operativo: ', os.platform())
// console.log('Versión del sistema operativo: ', os.release())
// console.log('Arquitectura del sistema operativo: ', os.arch())
console.log('Días encendido: ', os.uptime() / 60 / 60 / 24)