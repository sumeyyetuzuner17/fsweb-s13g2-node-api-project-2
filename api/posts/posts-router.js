// posts için gerekli routerları buraya yazın
const express = require("express");
const Post = require("./posts-model");

const router = express.Router();

router.get("./", (req, res) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.status(500).json({ message: "Gönderiler alınamadı" });
    });
});

router.get("/:id",(req,res)=>{
    Post.findById(req.params.id).then(findPost=>{
       if(!findPost){
        res.status(404).json({message:"Belirtilen ID'li gönderi bulunamadı"});
       }else{
        res.json(findPost);
       }
    }).catch(err=>{
        res.status(500).json({message:"Gönderi bilgisi alınamadı"});
    });
});


module.exports=router;