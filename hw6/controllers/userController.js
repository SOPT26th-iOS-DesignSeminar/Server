const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const User = require('../models/user');

exports.signup= async(req,res)=>{ // users 값 저장이 0으로 됨
    const {location,x} = req.body;
    
    if(!location){
        res.status(statusCode.OK).send(util.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE))
    }

    const result = await User.signup(location,x);

    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{insertIdx:result}));
}

exports.getUser = async(req,res)=>{
    const result = await User.getAll();
    
    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{result:result}))
}