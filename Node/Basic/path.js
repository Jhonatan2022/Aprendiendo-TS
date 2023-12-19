const path = require('node:path')

// unix /
// windows \
console.log(path.sep)

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const fileName = path.basename(filePath, '.txt')
console.log(fileName)

const extention = path.extname(filePath)
console.log(extention)