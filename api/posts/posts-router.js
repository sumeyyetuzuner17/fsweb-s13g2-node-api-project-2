// posts için gerekli routerları buraya yazın
const express = require("express");
const Post = require("./posts-model");

const router = express.Router();

router.get("./", (req, res) => {
  Post.find()
    .then((posts) => {
      res.json(post);
    })
    .catch((err) => {
      res.status(500).json({ message: "Gönderiler alınamadı" });
    });
});

module.exports=router;