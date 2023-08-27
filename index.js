const express = require('express')
const route  = require('./api/routes/user')
const initdb = require('./config/db')

const bodyparse = require('body-parser')

const app = express()

const PORT = 3001
app.use(bodyparse.json(
    {
        limit: '100MG',

}))
app.use(bodyparse.urlencoded(
    {
        limit: '100MG',
    extended: true
    
}))
app.use("/api",route)

app.listen(PORT,() => {
    initdb
    console.log('Escuchando peticiones')
    
}) 

