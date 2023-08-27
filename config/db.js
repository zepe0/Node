const mongoose = require ('mongoose')
const user = "zepe"
const pass = "z0106199"
const cluster = "@cluster0.lgyu6gt.mongodb.net/"
const DB = "factu"

// mongodb+srv://${user}:${pass}${cluster}${DB}?retryWrites=true&w=majority
const DB_URL = "mongodb+srv://zepe:z0106199@cluster0.lgyu6gt.mongodb.net/?retryWrites=true&w=majority"
 
exports.conectar = mongoose.connect(`mongodb+srv://${user}:${pass}${cluster}${DB}?retryWrites=true&w=majority`);
console.log("Conectado a la BD"); 



 

