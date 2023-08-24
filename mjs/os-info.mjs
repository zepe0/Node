// mjs se importa cada uno con el import y el from

import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'


console.log('el sistema operativo es ', platform())
console.log('el sistema operativo es ', release())
console.log('Arquitectura ', arch())
console.log('CPu ', cpus())
console.log('Memoria libre ', freemem() / 1024 / 1024 ,'MG')
console.log('Memoria Total ', totalmem() / 1024 / 1024, 'MG')
console.log('tiempo encendido ', uptime()/60 /124 , 'Horas')