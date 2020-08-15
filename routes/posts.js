const express = require('express')
const router = express.Router()
const Post = require('../models/Post');

//get back all posts  
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts)
    }catch(err){
        res.json({message: err});
    }
});

//submits a post
router.post('/', async (req,res) => {
    // console.log(req.body)
    const post = new Post({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email
    });
    try{
   const savedPost = await post.save();
   res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});

//specific post
router.get('/:postId',async (req,res) =>{
    try{
        const post= await Post.findById(req.params.postId)
        res.json(post)
   }
   catch(err){
       res.json({message: err});
   }
});
//delete data
router.delete('/:postId',async (req,res)=>{
    try{
         const removedpost= await Post.remove({_id:req.params.postId}); 
         res.json(removedpost);
    }
    catch(err){
        res.json({message: err});
    }
 });

 //update a post
 router.patch('/:postId',async (req,res)=>{
    try{
        const updatePost= await Post.updateOne(
            {_id: req.params.postId},
            {$set:{
                email: req.body.email}}
        );
        res.json(updatePost);
    }
    catch(err){
        res.send({message:err});
    }
});

module.exports = router;