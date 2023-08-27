const express = require('express')
const controler = require('../controlers/user')
const login= require("../controlers/authUser")

const router = express.Router()

const id = "59b99db9cfa9a34dcd7885c0"

router.get("/",controler.getData )
router.post("/register",login.register)  
router.post("/login",login.login)


    module.exports = router