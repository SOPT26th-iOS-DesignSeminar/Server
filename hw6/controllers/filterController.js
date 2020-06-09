const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');

const Store = require('../models/store');

exports.getStoreByFilter = async(req,res)=>{
    const{
        time_min,
        time_max,
        money_min,
        money_max,
        sort_type
    } = req.body;

    const getStore = await Store.getAll();
    const getRatingStore = await Store.getStoreByRating();
    let returnData=[];
    if(time_min&&time_max&&sort_type){
        getRatingStore.forEach(item=>{
            if(item.avg_delivery_time>time_min && item.avg_delivery_time < time_max && sort_type=="rating"){
                returnData.push(item);
            }
        })
        res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{result:returnData}))
    }
        else if(time_max&&time_min){
        getStore.forEach(item=>{
            if(item.avg_delivery_time>time_min && item.avg_delivery_time < time_max){
                returnData.push(item);
            }
        })
        res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{result:returnData}))
        }
        else if(sort_type){
            getRatingStore.forEach(item=>{
                if(sort_type=="rating"){
                    returnData.push(item);
                }
            })
            res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.OK,{result:returnData}))
            }
    }
    
    //const getStoreByRating = Store.getStoreByRating(sortIdx);
    //const getStoreByDeliveryFee = Store.getStoreByDeliveryFee(sortIdx);
    
    // if(sort_type==="rating"){
    //     returnData.push(getStoreByRating)
    // }else if(sort_type==="delivery_fee"){
    //     returnData.push(getStoreByDeliveryFee)
    // }else if(sort_type===null){
    //     returnData.push(getStore)
    // }

