const pool = require('../modules/pool')
const table = 'store';

const store = {
    signup: async(name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_money,category_1Idx,category_2Idx)=>{

        const questions = '?,?,?,?,?,?,?,?,?,?';
        const values = [name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_money,category_1Idx,category_2Idx];
        const fields = 'name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_money,category_1Idx,category_2Idx'

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
    getUserByIdx: async(idx)=>{
        const query = `SELECT * FROM ${table} WHERE storeIdx="${idx}"`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            if(err.errno==1062){
                console.log('getUserByName error :',err.errno,err.code);
            }
        console.log('getUserByName err ',err);
        }
    },
    update: async(idx,name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_money,category_1,category_2)=>{
        const values = [name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_money,category_1,category_2];
        const fields = 'name,address,avg_delivery_time,cheeta_delivery,rating,introduce,picture,delivery_money,category_1,category_2'
        
        const query = `UPDATE ${table} SET name="${name}", address="${address}", avg_delivery_time="${avg_delivery_time}",
        cheeta_delivery="${cheeta_delivery}",rating="${rating}",introduce="${introduce}",picture="${picture}",delivery_money="${delivery_money}",
        category_1="${category_1}",category_2="${category_2}"
        WHERE storeIdx = "${idx}"`;

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
        const query = `DELETE FROM ${table} WHERE storeIdx="${idx}" `;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            if(err.errno==1062){
                console.log('delete error :',err.errno,err.code);
            }
        console.log('delete err ',err);
        }
    }
}

module.exports=store;