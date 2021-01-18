const mongoose = require('mongoose');
const Schedule =  mongoose.model('schedule');

exports.index = async (req,res) =>{
    let schedule = await Schedule.find({});
    res.render('system/front end/class schedule/schedule',{schedule});
};

//Add class in the schedule
exports.create = async (req, res) =>{
	res.render('system/front end/class schedule/create schedule');
};

exports.store = async (req, res) =>{
	let {className, trainerName, startingTime, endingTime, days} = req.body;
	let schedule = new Schedule();
	schedule.className= className,
    schedule.trainerName= trainerName,
    schedule.startingTime= startingTime,
	schedule.endingTime= endingTime,
	schedule.days= days,
	await schedule.save();  
	res.redirect('/schedule');
};


//edit class in the schedule
// exports.edit = async (req,res) =>{
//     let schedule = await Schedule.find({});
//     res.render('system/front end/class schedule/edit schedule',{schedule});
// };


