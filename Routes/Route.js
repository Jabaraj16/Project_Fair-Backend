const express = require('express')
const router=express.Router()
const userController=require('../Controller/userController')
const projectController=require('../Controller/projectController')
const jwtMiddleware=require('../Middleware/jwtMiddleware')
const multerConfig = require('../Middleware/multerMiddleware')
//register
router.post('/register',userController.register)
// login
router.post('/login',userController.login)
//add project
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),  projectController.addProjects)
module.exports=router