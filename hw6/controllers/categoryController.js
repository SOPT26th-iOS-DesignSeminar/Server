const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const Main_category = require('../models/main_category')
const Sub_category = require('../models/sub_category')

exports.getMainAll = async(req,res)=>{
    const result = await Main_category.getAll();

    if(result.length===0){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.MAIN_CATEGORY_FAIL))
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{result:result}))
}

exports.getSubAll = async(req,res)=>{
    const result = await Sub_category.getAll();

    if(result.length===0){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.SUB_CATEGORY_FAIL))
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{result:result}))
}

exports.getSubByMainIdx = async(req,res)=>{
    const idx = req.params.id;

    const result = await Sub_category.getSubByMainIdx(idx);

    if(result.length===0){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.SUB_CATEGORY_FAIL))
    }
    
    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{result:result}))
    
}