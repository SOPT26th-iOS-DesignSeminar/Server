var express = require('express')
var router = express.Router();

const filterController = require('../controllers/filterController')

router.get('/',filterController.getStoreByFilter)

module.exports=router;