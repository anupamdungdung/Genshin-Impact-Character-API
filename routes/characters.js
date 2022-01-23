import express from 'express'
import {data} from './charactersdata.js'
import { getData } from '../controllers/charactersData.js';
const router = express.Router();

router.get('/', getData)

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


export default router;