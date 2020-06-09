var express = require('express');
var router = express.Router();

let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let responseMessage = require('../modules/responseMessage');

const UserController = require('../controllers/userController')

const User = require('../models/user');

router.post('/signup',UserController.signup)

router.get('/', UserController.getUser)

module.exports=router;