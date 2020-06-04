const pool = require('../modules/pool');
const table = 'category_1';

const category_1 = {
    getAll : async ()=>{
        const query = `SELECT * FROM ${table}`;

        try{
            const result = pool.queryParam(query);
            return result;
        }catch(err){
            if(err.errno==1062){
                console.log('signup error :',err.errno,err.code);
            }
        console.log('signup err ',err);
        }
    }
}

module.exports=category_1;