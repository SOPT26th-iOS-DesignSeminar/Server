const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const Ads = require('../models/ads')

exports.getAllAds = async(req,res)=>{
    const result = await Ads.getAll();

    if(result===0){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.ADS_NULL))
    }

    res.status(statusCode.OK).send(util.success(util.success(statusCode.OK,responseMessage.ADS_SUCCESS,{result:result})))
}