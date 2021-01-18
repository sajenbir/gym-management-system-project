const express = require('express');
const router = express.Router();
const schedulecontroller = require('../../usercontroller/web/schedulecontroller');

//View class schedule
router.get('/schedule', schedulecontroller.index);

//create class schedule
router.get('/schedule/create', schedulecontroller.create);
router.post('/schedule',schedulecontroller.store);

// //edit class schedule
// router.get('/schedule/:id/edit', schedulecontroller.edit);

// //update class schedule
// router.put('schedule/:id', schedulecontroller.update);

// //delete class schedule
// router.delete('schedule/:id', schedulecontroller.destroy);

module.exports = router;
