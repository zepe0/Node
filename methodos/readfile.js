/* 
si no tiene promesas incluidas puedes usar el de node 
ej Promesas incluidas:
const fs = require('node:fs/promises')

ej:

const {promisify} = require('node:util')
const readFilesPromise = promisify(fs.readFile)

*/

const fs = require('node:fs')

const text = fs.readFileSync('./archivo.txt', 'utf8') // le indicamos en que lo codifica si no devuelve buffer
console.log(text)
/*
const text = fs.readFileSync('./archivo.txt', 'utf8') // le indicamos en que lo codifica si no devuelve buffer
console.log(text)
*/