var express = require('express');
var router = express.Router();
const passport = require('passport');
const airlinesCtrl = require('../controllers/airlines');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home Page' });
});

router.get('/search', airlinesCtrl.search);

router.post('/search', airlinesCtrl.display);

router.get('/auth/google', passport.authenticate(
  // Which passport strategy is 
  'google', 
  {
    scope: ['profile', 'email'],
    //optional
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));


router.get('/logout',function(req, res) {
  req.logout(function() {
    // Change path for landing page
    res.redirect('/');
  });
});


module.exports = router;
