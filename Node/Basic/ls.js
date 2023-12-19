const fs = require('node:fs/promises')

// fs.readdir('.', (err, files) => {
//     if (err) {
//         console.log(err)
//         return
//     }

//     files.forEach(file => {
//         console.log(file)
//     })
// })

fs.readdir('.')
  .then((files) => {
    console.log(files)
  })
  .catch((err) => {
    console.log(err)
  })
