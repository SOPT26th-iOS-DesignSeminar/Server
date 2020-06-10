const pool = require('../modules/pool')
const table = 'store';

const store = {
    signup: async(sub_category_idx,name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_fee,distance)=>{

        const questions = '?,?,?,?,?,?,?,?,?,?';
        const values = [sub_category_idx,name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_fee,distance];
        const fields = 'sub_category_idx,name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_fee,distance'

        const query = `INSERT INTO ${table}(${fields}) VALUES (${questions})`;

        try{
            const result = await pool.queryParamArr(query,values);
            const resultIdx = result.insertId;
            return resultIdx;
        }catch(err){
            if(err.errno==1062){
                console.log('signup error :',err.errno,err.code);
            }
        console.log('signup err ',err);
        }
    },
    getAll: async()=>{
        const query =`SELECT * FROM ${table}`
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            if(err.errno==1062){
                console.log('getAll error :',err.errno,err.code);
            }
        console.log('getAll err ',err);
        }
    },
    getStoreByName: async(name)=>{
        const query = `SELECT * FROM ${table} WHERE name="${name}"`;
        console.log(query)
        try{
            const result = await pool.queryParam(query);
            console.log(result)
            return result;
        }catch(err){
            if(err.errno==1062){
                console.log('getStoreByName error :',err.errno,err.code);
            }
        console.log('getStoreByName err ',err);
        }
    },
    update: async(idx,sub_category_idx,name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_fee,distance)=>{
        
        const query = `UPDATE ${table} SET sub_category_idx=${sub_category_idx}, name="${name}", address="${address}", avg_delivery_time="${avg_delivery_time}",
        cheeta_delivery="${cheeta_delivery}",rating="${rating}",introduce="${introduce}",picture="${picture}",delivery_fee="${delivery_fee}",distance="${distance}"
        WHERE idx = "${idx}"`;

        try{
            const result = await pool.queryParam(query);
            const changedRows = result.changedRows;
            return changedRows;
        }catch(err){
            if(err.errno==1062){
                console.log('update error :',err.errno,err.code);
            }
        console.log('update err ',err);
        }
    },
    delete: async(idx)=>{
        const query = `DELETE FROM ${table} WHERE idx="${idx}" `;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            if(err.errno==1062){
                console.log('delete error :',err.errno,err.code);
            }
        console.log('delete err ',err);
        }
    },
    getStoreByRating: async(sortIdx)=>{
        const query = `SELECT * FROM ${table} ORDER BY rating DESC`
        // let returnResult = [];
        try{
            const result = await pool.queryParam(query);
            console.log("result: ", result);
            return result;
            // const result = await pool.queryParam(query);
            // for(i=0;i<sortIdx.length;i++){
            //     for(j=0;j<result.length;j++){
            //         if(sortIdx[i]===result[j].idx){
            //             returnResult.push(result[j])
            //         }
            //     }
            // }
            // return returnResult;
        }catch(err){
            if(err.errno==1062){
                console.log('getStoreByRating error :',err.errno,err.code);
            }
        console.log('getStoreByRating err ',err);
        }
    },
    getStoreByDeliveryFee: async(sortIdx)=>{
        const query = `SELECT * FROM ${table} ORDER BY delivery_fee DESC`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            if(err.errno==1062){
                console.log('getStoreByDeliveryFee error :',err.errno,err.code);
            }
        console.log('getStoreByDeliveryFee err ',err);
        }
    },
    getStoreByIdx: async(idx)=>{
        const query = `SELECT * FROM ${table} WHERE idx=${idx}`
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            if(err.errno==1062){
                console.log('getStoreByIdx error :',err.errno,err.code);
            }
        console.log('getStoreByIdx err ',err);
        }
    }
}

module.exports=store;