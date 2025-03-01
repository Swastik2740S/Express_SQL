const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');

router.post("/create", postController.createPost); 
router.get("/get", postController.getPosts); // Get all posts

module.exports = router;