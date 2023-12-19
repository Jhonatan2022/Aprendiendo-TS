import { redFile } from 'node:fs/promises';

Promise.all([
    readFile('./os-info.mjs', 'utf-8'),
    readFile('./file-system.js', 'utf-8')
]).then(([text, text2]) => {
    console.log('Primer texto', text)
    console.log('Segundo texto', text2)
})