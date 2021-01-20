const mongoose = require('mongoose');
const Schedule =  mongoose.model('schedule');

//View schedule in the class
exports.index = async (req,res) =>{
    let schedule = await Schedule.find({});
    res.render('system/front end/class schedule/schedule',{schedule});
};

//Add class in the schedule
exports.create = async (req, res) =>{
	res.render('system/front end/class schedule/create schedule');
};

//Edit class in the schedule
exports.edit = async (req, res) =>{
	let schedule =  await Schedule.findById(req.params.id); 
	res.render('system/front end/class schedule/edit schedule',{schedule});
};

exports.update = async (req, res) =>{
	let schedule = await Schedule.findById(req.params.id);
	if(schedule){
		let {className, trainerName, startingTime, endingTime, days} = req.body;
		schedule.classtName= className,
		schedule.trainerName= trainerName,
		schedule.startingTime= startingTime,
		schedule.endingTime= endingTime,
		schedule.days=days,
		await schedule.save();  
	};
	res.redirect('/schedule');
};

//Store schedule
exports.store = async (req, res) =>{
	let {className, trainerName, startingTime, endingTime, days} = req.body;
	let schedule = new Schedule();
	schedule.className= className,
    schedule.trainerName= trainerName,
    schedule.startingTime= startingTime,
	schedule.endingTime= endingTime,
	schedule.days= days,
	await schedule.save();  
	req.flash('alerts',{
		type:'sucess',
		message: 'Class sucessfully added in the schedule!'
	})
	res.redirect('/schedule');
};

//removes class from the schedule
exports.destroy = async(req,res) =>{
	let schedule = Schedule.findById(req.params.id);
	if(schedule){
		await schedule.remove();
	}
	res.redirect('/schedule'); 
};

