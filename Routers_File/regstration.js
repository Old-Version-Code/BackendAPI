const express = require('express');
const router = express.Router();

const mongoType = require('mongoose').Types;


const Regstration = require('../Models/Regstration.js');

// Router define Here 
// All get Data from this API

router.get('/', (req, res)=>{
    Regstration.find((err, doc)=>{
        if(err){
            console.log('Error Occures While fetching Data' +err);
            res.status(400).send('Internal Error', + err);
        }else{
            res.send(doc);
        }
    })
})



// Create New Post APi

router.post('/', (req, res)=>{
    let regstration = new Regstration({
        username:req.body.username,
        fullname:req.body.fullname,
        email:req.body.email,
        password:req.body.password,
        gender:req.body.gender,
        profile:req.body.profile,
        enble:req.body.enble
    })

    regstration.save((err, doc)=>{
        if(err){
            console.log('Internal Error', err);
            res.status(400).send('Internal Error', + err)
        }else{
           res.send(doc);
        }
    })
})

//Post get data by id {API}

router.get('/:id',(req, res)=>{
    if(mongoType.ObjectId.isValid(req.params.id)){
        Regstration.findById(req.params.id,(err, doc)=>{
            if(err){
                console.log('Internal Error', + err);
                res.status(400).send('Internal Error', + err);
            }else{
                res.send(doc);
            }
        })
    }else{
        res.status(400).send('Not found this id', + id);
    }
})


//Delete get data by id {API}

router.delete('/:id',(req, res)=>{
    if(mongoType.ObjectId.isValid(req.params.id)){
        Regstration.findByIdAndRemove(req.params.id,(err, doc)=>{
            if(err){
                console.log('Internal Error', + err);
                res.status(400).send('Internal Error', + err);
            }else{
                res.send(doc);
            }
        })
    }else{
        res.status(400).send('Not found this id', + id);
    }
})



//Put get data by id {API}
router.put('/:id',(req, res)=>{
    let regstration= {
        username:req.body.username,
        fullname:req.body.fullname,
        email:req.body.email,
        password:req.body.password,
        gender:req.body.gender,
        profile:req.body.profile,
    }
    if(mongoType.ObjectId.isValid(req.params.id)){
        Regstration.findByIdAndUpdate(req.params.id,{$set:regstration},{new:true},(err, doc)=>{
            if(err){
                console.log('Internal Error', + err);
                res.status(400).send('Internal Error', + err);
            }else{
                res.send(doc);
            }
        })
    }else{
        res.status(400).send('Not found this id', + id);
    }
})


module.exports = Regstration;