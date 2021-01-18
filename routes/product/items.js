const express =  require('express');
const router = express.Router();
const itemcontroller = require('../../usercontroller/web/itemcontroller');
const {catchError} = require('../../handler/errorhandler');


router.get('/product', itemcontroller.index);

module.exports = router;