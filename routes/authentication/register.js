const express =  require('express');
const router = express.Router();
const authcontroller = require('../../usercontroller/web/authcontroller');
const {catchError} = require('../../handler/errorhandler');
 
router.get('/register',authcontroller.registerView);

module.exports = router;