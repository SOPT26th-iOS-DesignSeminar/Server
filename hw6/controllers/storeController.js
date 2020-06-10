const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const Store = require('../models/store');

const Sub_category = require('../models/sub_category')

exports.signup = 
    async (req,res)=>{
        const{
            sub_category_name,name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_fee,distance
        } = req.body;

        const sub_category_idx = await Sub_category.getIdxByName(sub_category_name);
        console.log(sub_category_idx)
    
        if(!name || !address || !avg_delivery_time || !cheeta_delivery || !rating || !introduce || !picture || !delivery_fee || !sub_category_idx || ! distance){
            res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE))
            return;
        }
        const resultIdx = await Store.signup(sub_category_idx,name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_fee,distance);
    
        if(resultIdx===-1){
            res.status(statusCode.BAD_REQUEST)
            return;
        }
        return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.STORE_SUCCESS,{insertIdx:resultIdx}));
    } 

exports.getAll = async(req,res)=>{
    const result = await Store.getAll();

    if(result===0){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.STORE_GET_FAIL))
    }
    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.STORE_GET_DATA,{result:result}))
}

exports.getStoreByName = async(req,res)=>{

    const {name} = req.body;

    const result = await Store.getStoreByName(name);

    
    if(result===0){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.STORE_GET_FAIL))
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.STORE_GET_DATA,{data:result}))
}

exports.update = async(req,res)=>{
    const updateIdx = req.params.idx;

    const{
        sub_category_idx,name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_fee
    } = req.body;

    const result= await Store.update(updateIdx,sub_category_idx,name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_fee);
    const changedData = await Store.getStoreByIdx(updateIdx);

    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{changedData:changedData}))
}

exports.delete = async(req,res)=>{

    const deleteIdx = req.params.idx;

    const result = await Store.delete(deleteIdx);

    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{deleteIdx:result}))
}