const express = require('express')
const router = express.Router();
const mongo=require('mongodb')
const assert=require('assert')


var url='mongodb://localhost:27017/genshinCharacters';

const data = require('./charactersdata');

router.get('/', (req, res, next) => {

    res.status(200).json(data);
    
    // var resultArray=[];
    // mongo.connect(url,async (err,db)=>{
    //     assert.strictEqual(null,err)
    //     try{
    //         var result=await db.collection('characters').find();
    //     res.json(result);
    //     }
    //     catch(err){
    //         console.log(err);
    //         res.json({
    //             error:  err
    //         })
    //     }
        
    // });
    
    // res.writeHead(200, { "Content-type": 'application/json' });    
})

router.get('/:charactername',(req,res,next)=>{
    const characterName=req.params.charactername;
    data.forEach((char)=>{
        if(char.name===characterName || characterName.toLowerCase===char.slug){
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