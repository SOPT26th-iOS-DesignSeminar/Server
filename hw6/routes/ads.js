var express = require('express')
var router = express.Router();

let Store = require('../models/store');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let responseMessage = require('../modules/responseMessage');

const Ads = require('../models/ads')

router.get('/',async(req,res)=>{
    const result = await Ads.getAll();

    if(result===0){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.ADS_NULL))
    }

    res.status(statusCode.OK).send(util.success(util.success(statusCode.OK,responseMessage.ADS_SUCCESS,{result:result})))
})

module.exports=router;