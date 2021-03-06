// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});

// route for our about page
router.get('/about', function(req, res) {
  var users = [
    { name: 'Jane', email: 'jane@nodetravel.xyz', avatar: 'http://placekitten.com/300/300'},
    { name: 'John', email: 'john@nodetravel.xyz', avatar: 'http://placekitten.com/400/400'},
    { name: 'Jack', email: 'jack@nodetravel.xyz', avatar: 'http://placekitten.com/500/500'},
    { name: 'Samantha', email: 'samantha@nodetravel.xyz', avatar: 'http://placekitten.com/700/700'}
  ];

  res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {
  res.render('pages/thanks', { user: req.body.name });
});