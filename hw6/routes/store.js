var express = require('express')
var router = express.Router();

let Store = require('../models/store');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let responseMessage = require('../modules/responseMessage');

router.post('/signup',async (req,res)=>{
    const{
        name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_money,category_1Idx,category_2Idx
    } = req.body;

    if(!name || !address || !avg_delivery_time || !cheeta_delivery || !rating || !introduce || !picture || !delivery_money || !category_1Idx || !category_2Idx){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE))
    }
    const resultIdx = await Store.signup(name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_money,category_1Idx,category_2);

    if(resultIdx===0){
        res.status(statusCode.BAD_REQUEST)
    }
    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.STORE_SUCCESS,{insertIdx:resultIdx}));
} )

router.get('/',async(req,res)=>{
    const result = await Store.getAll();

    if(result===0){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.STORE_GET_FAIL))
    }
    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.STORE_GET_DATA,{result:result}))
})

router.get('/:idx', async(req,res)=>{

    const searchStore = req.params.idx;

    const result = await Store.getUserByIdx(searchStore);
    
    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.STORE_GET_DATA,{data:result}))
})

router.put('/:idx', async(req,res)=>{
    const updateIdx = req.params.idx;

    const{
        name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_money,category_1Idx,category_2Idx
    } = req.body;

    const result= await Store.update(updateIdx,name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_money,category_1Idx,category_2Idx);
    const changedData = await Store.getUserByIdx(updateIdx);

    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{changedData:changedData}))
})

router.delete('/:idx',async(req,res)=>{
    const deleteIdx = req.params.idx;

    const result = await Store.delete(deleteIdx);

    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{deleteIdx:deleteIdx}))
})


module.exports=router;