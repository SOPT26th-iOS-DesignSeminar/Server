var express = require('express')
var router = express.Router();

const Category = require('../models/category_1');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const responseMessage = require('../modules/responseMessage');
const KorFood = require('../models/korFood');
const ZzimFood = require('../models/zzimFood');
const Category2 = require('../modules/category2');

router.get('/',async(req,res)=>{
    const result = await Category.getAll();

    if(result.length===0){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.BIG_CATEGORY_FAIL))
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{result:result}))
})

router.get('/:id',async(req,res)=>{
    const idx = req.params.id;

    const KorFoodResult = await KorFood.getAll();
    const ZzimfoodResult = await ZzimFood.getAll();

    let result = [];

    const changedIdx = parseInt(idx)
    if(changedIdx===1){
        result.push(KorFoodResult)
    }else if(changedIdx===5){
        result.push(ZzimfoodResult)
    }

    if(result[0].length===0){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.MIDDLE_CATEGORY_FAIL))
    }
    
    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{result:result[0]}))
    
    })
     


module.exports=router;