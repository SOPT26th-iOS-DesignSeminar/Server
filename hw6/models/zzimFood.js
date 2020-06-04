const pool = require('../modules/pool');
const table = 'zzimFood';

const zzimFood = {
    getAll: async(req,res)=>{
        const query = `SELECT * FROM ${table}`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            if(err.errno==1062){
                console.log("get data error ",err.errno,err.data);
            }
            console.log("get data error",err)
        }
    }
}

module.exports = zzimFood;