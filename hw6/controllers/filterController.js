let responseMessage = require('../modules/responseMessage');
let statusCode = require('../modules/statusCode');
let util = require('../modules/util');

let Store = require('../models/store');

exports.getStoreByFilter = async(req,res)=>{
    const{
        time_min,
        time_max,
        money_min,
        money_max,
        sort_type
    } = req.body;

    const getStore = await Store.getAll();
    
    let returnData=[];

    getStore.forEach(item=>{
        let sortIdx = [];
        if(item.avg_delivery_time>time_min && item.avg_delivery_time < time_max){
            sortIdx.push(item.idx);
            // if(sort_type!=null){
            //     switch(sort_type){ 
            //         case "rating":
            //            returnData.push(getStoreByRating)
            //             break;
            //         case "delivery_money":
            //             returnData.push(getStoreByDeliveryFee)
            //             break;
            //     }
            // }else if(sort_type===null){
            //     returnData.push(item);
            // }
        }
    const getStoreByRating = Store.getStoreByRating(sortIdx);
    const getStoreByDeliveryFee = Store.getStoreByDeliveryFee(sortIdx);
    
    if(sort_type==="rating"){
        returnData.push(getStoreByRating)
    }else if(sort_type==="delivery_fee"){
        returnData.push(getStoreByDeliveryFee)
    }else if(sort_type===null){
        returnData.push(getStore)
    }

    })
    res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{result:returnData}))
}