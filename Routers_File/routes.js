const express = require('express');
const router = express.Router();

const mongoType = require('mongoose').Types;


const Post = require('../Models/Post.js');

// Router define Here 
// All get Data from this API

router.get('/', (req, res)=>{
    Post.find((err, doc)=>{
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
    let post = new Post({
        title:req.body.title,
        content:req.body.content,
        username:req.body.username
    })

    post.save((err, doc)=>{
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
        Post.findById(req.params.id,(err, doc)=>{
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
        Post.findByIdAndRemove(req.params.id,(err, doc)=>{
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
    let post= {
        title:req.body.title,
        content:req.body.content,
        username:req.body.username
    }
    if(mongoType.ObjectId.isValid(req.params.id)){
        Post.findByIdAndUpdate(req.params.id,{$set:post},{new:true},(err, doc)=>{
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






module.exports = router;