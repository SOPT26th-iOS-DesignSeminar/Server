var express = require('express')
var router = express.Router();

let Store = require('../models/store');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let responseMessage = require('../modules/responseMessage');

const StoreController = require('../controllers/storeController')

router.post('/signup',StoreController.signup)

router.get('/',StoreController.getAll)

router.get('/name', StoreController.getStoreByName)

router.put('/:idx', StoreController.update)

router.delete('/:idx',StoreController.delete)   


module.exports=router;