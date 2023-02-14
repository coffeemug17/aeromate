var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/posts');


// Here, we define all the routes for the all posts page
// On this page all the posts are displayed

// ALl routes start with /posts

router.get('/', postsCtrl.index);

router.get('/new/airlines/:id', postsCtrl.new);

router.post('/', postsCtrl.create);

module.exports = router;