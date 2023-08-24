// CommonJS require modulo   -> lo requeriomos de otro modulo 

const so = require ('node:os')


console.log('el sistema operativo es ', so.platform())
console.log('el sistema operativo es ', so.release())
console.log('Arquitectura ', so.arch())
console.log('CPu ', so.cpus())
console.log('Memoria libre ', so.freemem() / 1024 / 1024 ,'MG')
console.log('Memoria Total ', so.totalmem() / 1024 / 1024, 'MG')
console.log('tiempo encendido ', so.uptime()/60 /124 , 'Horas')