const mongoose = require('mongoose');
const Member = mongoose.model('Member');

//View all member list
exports.index = async (req, res) =>{
	let member = await Member.find({});
	res.render('system/front end/member/member',{member});
};

//Add members in the list
exports.create = async (req, res) =>{
	res.render('system/front end/member/createmember');
};

//Edit members in the list
exports.edit = async (req, res) =>{
	let member =  await Member.findById(req.params.id); 
	res.render('system/front end/member/editmember',{member});
};

exports.update = async (req, res) =>{
	let member = await Member.findById(req.params.id);
	if(member){
		let {firstName, lastName, age, gender} = req.body;
		member.firstName= firstName,
		member.lastName= lastName,
		member.age= age,
		member.gender= gender,
		await member.save();  
	};
	res.redirect('/member');
};

//store memeber in the list
exports.store = async (req, res) =>{
	let {firstName, lastName, age, gender, joinedDate} = req.body;
	let member = new Member();
	member.firstName= firstName,
	member.lastName= lastName,
	member.age= age,
	member.gender= gender,
	member.joinedDate= Date.now(),
	await member.save();  
	res.redirect('/member');
};

//delete member in the list
exports.destroy = async(req,res) =>{
	let member = Member.findById(req.params.id);
	if(member){
		await member.remove();
	}
	res.redirect('/member'); 
};