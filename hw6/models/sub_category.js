const pool = require('../modules/pool');
const table = 'sub_category';

const sub_category = {
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
    },
    getSubByMainIdx: async(idx)=>{
        const query = `SELECT * FROM ${table} WHERE main_category_idx=${idx}`

        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            if(err.errno==1062){
                console.log('signup error :',err.errno,err.code);
            }
        console.log('signup err ',err);
        }
    },
    getIdxByName: async(name)=>{
        const query = `SELECT * FROM ${table} WHERE name="${name}"`;
        try{
            const result = await pool.queryParamArr(query);
            console.log(result)
            return result[0].idx;

        }catch(err){
            if(err.errno==1062){
                console.log('signup error :',err.errno,err.code);
            }
        console.log('signup err ',err);
        }
    }
}

module.exports=sub_category;