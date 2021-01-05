const express =  require('express');
const router = express.Router();
const usercontroller = require('../usercontroller/web/usercontroller.js')

router.get('/', usercontroller.index);


module.exports = router;