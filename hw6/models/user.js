const pool = require('../modules/pool');
const table = 'user';

const user = {
    signup: async(location,x)=>{
        const fields = 'location,x';
        const value =[location,x];

        const query = `INSERT INTO ${table}(${fields}) VALUES (?)`;

        try{
            const result = await pool.queryParamArr(query,value);
            const insertIdx = result.insertId;
            return insertIdx;
        }catch(err){
            if(err.errno==1062){
                console.log('signup error :',err.errno,err.code);
            }
        console.log('signup err ',err);
        }
    },
    getAll: async()=>{
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

module.exports=user;