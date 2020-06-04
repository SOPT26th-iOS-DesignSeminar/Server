var express = require('express')
var router = express.Router();

let Store = require('../models/store');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let responseMessage = require('../modules/responseMessage');

router.get('/',async(req,res)=>{
    const{
        time_min,
        time_max,
        money_min,
        money_max,
        sort_type
    } = req.body;

    const getStore = await Store.getAll();
    let returnData=[];
    
    function ratingFunc(item1, item2){
        item1.rating-item2.rating;
    }
    function deliveryMoneyFunc(item1,item2){
        item1.delivery_money-item2.deliveryMoney;
    }

    getStore.forEach(item=>{
        if(item.avg_delivery_time>time_min && item.avg_delivery_time < time_max){
            returnData.push(item);
            if(sort_type!=null){
                switch(sort_type){ // sort_type 이 안먹는다
                    case "rating":
                        returnData.sort(ratingFunc);
                        break;
                    case "delivery_money":
                        returnData.sort(deliveryMoneyFunc);
                        break;
                }
            }
        }
    })
    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{result:returnData}))
})

module.exports=router;