let responseMessage = require('../modules/responseMessage');
let statusCode = require('../modules/statusCode');
let util = require('../modules/util');
let User = require('../models/user');

exports.signup= async(req,res)=>{ // users 값 저장이 0으로 됨
    const {location} = req.body;
    
    if(!location){
        res.status(statusCode.OK).send(util.fail(statusCode.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE)))
    }

    const result = await User.signup(location);

    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{insertIdx:result}));
}

exports.getUser = async(req,res)=>{
    const result = await User.getAll();
    
    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{result:result}))
}