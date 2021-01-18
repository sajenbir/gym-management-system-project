const express =  require('express');
const router = express.Router();
const usercontroller = require('../../usercontroller/web/staffcontroller');
const employeeValidator =  require('../../validator/gymemployee validator');
const membercontroller = require('../../usercontroller/web/membercontroller');
const memberValidator = require('../../validator/membervalidator');
const {catchError} = require('../../handler/errorhandler');


// GYM EMPLOYEE

//gym employee
router.get('/', usercontroller.index);

//add gym employee
router.get('/create', usercontroller.create);
router.post('/',[employeeValidator], catchError(usercontroller.store));

//edit gym employee
router.get('/:id/edit', catchError(usercontroller.edit));

//update gym employee
router.put('/:id', [employeeValidator], catchError(usercontroller.update));

//delete gym employe
router.delete('/:id', catchError(usercontroller.destroy));

//GYM MEMBER

//View gym memeber
router.get('/member', membercontroller.index);

//Add gym member
router.get('/member/create', membercontroller.create);
router.post('/member', [memberValidator], catchError(membercontroller.store));

//edit gym members
router.get('/member/:id/edit', catchError(membercontroller.edit));

//update gym members
router.put('/member/:id', [memberValidator], catchError(membercontroller.update));

//delete gym members
router.delete('/member/:id', catchError(membercontroller.destroy));

module.exports = router;