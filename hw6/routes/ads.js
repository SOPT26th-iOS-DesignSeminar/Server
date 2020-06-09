var express = require('express')
var router = express.Router();

const AdsController = require('../controllers/adsController')

router.get('/',AdsController.getAllAds)

module.exports=router;