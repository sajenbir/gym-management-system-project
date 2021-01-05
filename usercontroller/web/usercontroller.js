const mongoose = require('mongoose');
const gymemployee = mongoose.model('gymemployee');

exports.index = async(req, res)=>{
	let gymemployee =  await Gymemployee.find({});
	res.render('system/front end/index.ejs');
}