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
    data.forEach((char)=>{
        if(char.name==characterName || characterName.toLowerCase==char.slug){
            res.send(JSON.stringify(char));
            
        }
        else{
            return res.status(404).json({
                error:"Query not found!"
            })
        }

    });

});


module.exports = router;