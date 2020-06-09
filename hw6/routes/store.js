var express = require('express')
var router = express.Router();

const StoreController = require('../controllers/storeController')

router.post('/signup',StoreController.signup)
router.get('/',StoreController.getAll)

router.get('/name', StoreController.getStoreByName)

router.put('/:idx', StoreController.update)

router.delete('/:idx',StoreController.delete)   


module.exports=router;