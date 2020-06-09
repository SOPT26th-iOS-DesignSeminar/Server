var express = require('express')
var router = express.Router();

let Store = require('../models/store');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let responseMessage = require('../modules/responseMessage');

const AdsController = require('../controllers/adsController')

router.get('/',AdsController.getAllAds)

module.exports=router;