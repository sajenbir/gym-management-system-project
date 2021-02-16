const express =  require('express');
const router = express.Router();
const authcontroller = require('../../usercontroller/web/authcontroller');
const {authValidator, loginValidator} = require('../../validator/register validator');
const {catchError} = require('../../handler/errorhandler');
 
router.get('/register',authcontroller.registerView);
router.post('/register', [authValidator], catchError(authcontroller.register));

router.get('/login', authcontroller.loginView);
router.post('/login', [loginValidator],catchError(authcontroller.login));

module.exports = router;