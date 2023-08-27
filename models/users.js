
const mongoose = require('mongoose')
const modelUser = new mongoose.Schema(
    {
      
        name: {
            type: String,
        },
        email: {
            type: String,
            unique: true            
            
        },
        pws: {
            type: String,
            
        },
        avatar: {
            type: String,
            default: 'https://media.istockphoto.com/id/1300845620/es/vector/icono-de-usuario-plano-aislado-sobre-fondo-blanco-s%C3%ADmbolo-de-usuario-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=grBa1KTwfoWBOqu1n0ewyRXQnx59bNHtHjvbsFc82gk='
        },
        idasociados: {
            type: Array,
            default: []
        }
               
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('user', modelUser)