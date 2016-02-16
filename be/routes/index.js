var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/statistik', function(req, res, next) {
    res.render('statistik');
});

module.exports = router;
