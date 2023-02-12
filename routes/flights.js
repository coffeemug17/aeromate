var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// Here, we define all the routes for the all flights page
// On this page all the flights are displayed

router.get('/', flightsCtrl.index);

module.exports = router;