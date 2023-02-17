var express = require('express');
var router = express.Router();
var airlinesCtrl = require('../controllers/airlines');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// All routes begin with /airlines
router.get('/:id', ensureLoggedIn, airlinesCtrl.show);

module.exports = router;