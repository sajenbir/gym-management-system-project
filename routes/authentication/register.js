const express =  require('express');
const router = express.Router();
const authcontroller = require('../../usercontroller/web/authcontroller');
const authValidator = require('../../validator/register validator');
const {catchError} = require('../../handler/errorhandler');
 
router.get('/register',authcontroller.registerView);
router.post('/register', [authValidator], catchError(authcontroller.register), authcontroller.registerView);
module.exports = router;