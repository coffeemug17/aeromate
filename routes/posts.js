var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/posts');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// Here, we define all the routes for the all posts page
// On this page all the posts are displayed

// ALl routes start with /posts

router.get('/', postsCtrl.index);

router.get('/new/airlines/:id', ensureLoggedIn, postsCtrl.new);

router.post('/', ensureLoggedIn, postsCtrl.create);

router.get('/:id', postsCtrl.show);

module.exports = router;