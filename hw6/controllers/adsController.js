let responseMessage = require('../modules/responseMessage');
let statusCode = require('../modules/statusCode');
let util = require('../modules/util');
const Ads = require('../models/ads')

exports.getAllAds = async(req,res)=>{
    const result = await Ads.getAll();

    if(result===0){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.ADS_NULL))
    }

    res.status(statusCode.OK).send(util.success(util.success(statusCode.OK,responseMessage.ADS_SUCCESS,{result:result})))
}