const mongoose = require('mongoose');

//View all items 
exports.index = async (req, res) =>{
	// let workout = await Workout.find({});
	res.render('system/front end/workout/workout plan.ejs',{});
};