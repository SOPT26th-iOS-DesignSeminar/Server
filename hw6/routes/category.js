var express = require('express')
var router = express.Router();

const CategoryController = require('../controllers/categoryController');

router.get('/main',CategoryController.getMainAll)

router.get('/main/:id',CategoryController.getSubByMainIdx)

router.get('/sub',CategoryController.getSubAll)

module.exports=router;