var express = require('express');
var router = express.Router();

const UserController = require('../controllers/userController')

router.post('/signup',UserController.signup)

router.get('/', UserController.getUser)

module.exports=router;