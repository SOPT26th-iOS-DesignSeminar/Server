var express = require('express');
var router = express.Router();

let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let responseMessage = require('../modules/responseMessage');

const User = require('../models/user');

router.post('/signup',async(req,res)=>{ // users 값 저장이 0으로 됨
    const location = req.body;
    
    if(!location){
        res.status(statusCode.OK).send(util.fail(statusCode.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE)))
    }

    const result = await User.signup(location);

    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{insertIdx:result}));
})

module.exports=router;