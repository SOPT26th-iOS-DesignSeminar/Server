var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.use('/users',require('./users'));
router.use('/store',require('./store'));
router.use('/ads',require('./ads'));
router.use('/category',require('./category'));
router.use('/filter',require('./filter'));