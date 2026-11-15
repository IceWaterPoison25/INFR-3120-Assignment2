var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home Page' });
});

/* GET home page 2. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home Page' });
});

/* GET contact me page. */
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me Page' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects Page' });
});

/* GET about me page*/
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me Page' });
});

module.exports = router;
