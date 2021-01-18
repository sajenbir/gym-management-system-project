const express = require('express');
const router = express.Router();
const schedulecontroller = require('../../usercontroller/web/schedulecontroller');
const scheduleValidator = require('../../validator/schedule validator');
const {catchError} = require('../../handler/errorhandler');

//View class schedule
router.get('/schedule', schedulecontroller.index);

//create class schedule
router.get('/schedule/create', schedulecontroller.create);
router.post('/schedule',[scheduleValidator],catchError(schedulecontroller.store));

//edit class schedule
router.get('/schedule/:id/edit', catchError(schedulecontroller.edit));

//update class schedule
router.put('/schedule/:id', [scheduleValidator], catchError(schedulecontroller.update));

//delete class schedule
router.delete('/schedule/:id', catchError(schedulecontroller.destroy));

module.exports = router;
