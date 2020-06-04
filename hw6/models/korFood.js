const pool = require('../modules/pool');
const table = 'korFood';

const korFood = {
    getAll: async()=>{
        const query = `SELECT * FROM ${table}`;

        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            if(err.errno===1062){
                console.log('signUp error :',err.errno,err.code);
                return -1;
            }
            console.log('signUp error ',err);
            throw err;
        }
    }
}

module.exports=korFood;