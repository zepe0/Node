const fs = require('node:fs') /// recomendable 

const stats = fs.statSync('./archivo.txt')
console.log(
    stats.isFile(), // es fichero 
    stats.isDirectory(), // es un Directorio
    stats.isSymbolicLink(), //Es un enlace simbolico
    stats.size,// tamaño en bytes
)