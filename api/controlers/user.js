const { Mongoose  } = require('mongoose');
const User = require('../../models/users')
const con = require('../../config/db')


exports.getData = (req,res) =>{  
 
    User.find({})
    
   .then((result) =>{
  
    
    res.send({result})
    
   }); 
}

exports.insertData = (req,res) =>{

    const data = req.body
    const username = 'MArtaa'
    const useremail = "MArtaa2@tes.es"
       
    
        User.findOne({email:useremail})
        .then((user)=>{
            if(!user){
                User.create({ name: username, email:useremail, pws:"213", roles: ['user'] })          
                res.cookie('token', 23)                 
               return res.send({code: 200, msg:" Usuario Creado Correctamente"})
            }
           
            if(user.$isMongooseModelPrototype === true)  
                res.status(402).json({error: `El email${user.email} ya esta registrado `, code: 402})  
        })
        
   
    
         
     
}

exports.upData = (req,res) =>{  
    const id = req.body._id // recoge del Body
    const param = req.param // recoge Parámetros en la url
    debugger
    User.updateOne({_id:id}, {param})

    .then(result =>{
        if(result.modifiedCount === 0)
        res.status(200).json({msn: "Sin Actualización"})
        if (result.matchedCount === 1)
        res.status(200).json({msn: "Actualizado"})
    })   
        
}


           
   
