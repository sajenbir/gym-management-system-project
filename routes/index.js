const express = require('express');
const router = express.Router();
const usercontroller = require('../usercontroller/usercontroller.js');


router.get('/gymemployee', usercontroller.get);


router.post('/gymemployee', usercontroller.store);


router.put('/gymemployee/:id', usercontroller.update);


router.get('/gymemployee/:id', usercontroller.view);


router.delete('/gymemployee/:id', usercontroller.destroy);


module.exports = router;