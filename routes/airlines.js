var express = require('express');
var router = express.Router();
var airlinesCtrl = require('../controllers/airlines');


// All routes begin with /airlines
router.get('/:id', airlinesCtrl.show);

module.exports = router;