const express =  require('express');
const router = express.Router();
const workoutcontroller = require('../../usercontroller/web/workoutcontroller');
const {catchError} = require('../../handler/errorhandler');


router.get('/workout', workoutcontroller.index);

module.exports = router;