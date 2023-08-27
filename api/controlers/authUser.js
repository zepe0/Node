const has = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require ("../../models/users");
const env = require("../../config/env");
// ----> REGISTER 
exports.register = (req,res)=> {
    try {
    const {email,pas, name}= req.body
    const token = jwt.sign(email, env.TOKEN_SECRET)    
    
    User.findOne({email:email})        
    .then((user)=>{
        if(!user){
           return has.hash(pas,7)  // Encryption de la Contraseña
            .then((pwsehased)=>{
                
                User.create({ name: name, email:email, pws:pwsehased, roles: ['user'] })                
                res.cookie('token', token)                 
               return res.status(200).json({code: 200, msg:" Usuario Creado Correctamente"})
            })
        }
       
        if(!user.$isNew)   
            return res.status(402).json({ msn: `El email: ${user.email} ya esta registrado `, code: 402})  
    })   

        
    } catch (error) {
        return res.status(500).json({ msn: error.message, code: 500})
    }
    
}

// ----> Login
exports.login = (req,res)=> {
    const {email,pas}= req.body     
    try {
    User.findOne({email:email})        
    .then((user)=>{        
        if(!user)
         return res.status(404).json({ msn: `Usuario ${email} no encontrado `, code: 400})          
       
        if(user)
            has.compare(pas, user.pws)
            .then((isMatch) =>{
                if(!isMatch)
                return res.status(400).json({ msn: `Credenciales Incorrectas`, code: 400, color: "red"})
                if(isMatch)
                var doc = user._doc
                delete doc._id
                delete doc.pws
                delete doc.idasociados
                delete doc.createdAt
                delete doc.updatedAt
                return res.status(200).json({ msn: `Bienbenido ${user.email} `, code: 200, color: "green", user:user._doc })  
        })
          
            
    })   

        
    } catch (error) {
        return res.status(500).json({ msn: error.message, code: 500})
    }
    
}

exports.logout = (req,res)=>{
    res.cookie('token', "")
   return res.send({msg:"Logout"})
}