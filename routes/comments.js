var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/posts/:id/comments', ensureLoggedIn, commentsCtrl.create);

router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);

router.put('/comments/:id', ensureLoggedIn, commentsCtrl.update);

module.exports = router;