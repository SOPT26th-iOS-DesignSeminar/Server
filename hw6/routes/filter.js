var express = require('express')
var router = express.Router();

let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let responseMessage = require('../modules/responseMessage');

const filterController = require('../controllers/filterController')

router.get('/',filterController.getStoreByFilter)

module.exports=router;