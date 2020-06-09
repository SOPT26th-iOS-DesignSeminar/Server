const pool = require('../modules/pool');
const table = 'main_category';

const main_category = {
    getAll : async ()=>{
        const query = `SELECT * FROM ${table}`;

        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            if(err.errno==1062){
                console.log('signup error :',err.errno,err.code);
            }
        console.log('signup err ',err);
        }
    }
}

module.exports=main_category;