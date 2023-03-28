var express = require('express');
var router = express.Router();
var passport = require('passport')

/* GET home page. */
//We will move this over to reviews.js
router.get('/', function(req, res, next) {
  res.redirect('/dogs');
});

router.get('/auth/google', passport.authenticate(
    'google',
    {
        scope: ['profile', 'email'],
        prompt: 'select_account'
    }
))

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/dogs',
        failureRedirect: '/dogs'
    }
))

router.get('/logout', function(req,res){
    req.logout(function(){
        res.redirect('/dogs')
    })
})

module.exports = router;
