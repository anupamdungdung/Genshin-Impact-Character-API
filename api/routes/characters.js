const express = require('express')
const app=express();
const router = express.Router();

const data = require('./charactersdata');

router.get('/', (req, res, next) => {
    res.json(data);
    // res.writeHead(200, { "Content-type": 'application/json' });    
})

router.get('/:charactername',(req,res,next)=>{
    const characterName=req.params.charactername;
    for(const char in data){
        if(data[char].name==characterName || characterName.toLowerCase()==data[char].slug){
            res.json(data[char]);
        }
        else{
            res.json({
                error: "Query Not Found"
            })
        }
    }
})


module.exports = router;