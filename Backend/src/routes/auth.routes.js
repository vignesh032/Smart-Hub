const express = require('express')
const authContoller = require('../contollers/auth.controller')

const router = express.Router()

router.post('/register',authContoller.registerUser)
router.post('/login',authContoller.loginUser)
router.get('/users',authContoller.getAllUsers)

module.exports=router