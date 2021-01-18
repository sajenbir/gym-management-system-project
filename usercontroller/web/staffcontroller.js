const mongoose = require('mongoose');
const Gymemployee = mongoose.model('gymemployee');

//View all gym employee
exports.index = async(req, res)=>{
	let gymemployee =  await Gymemployee.find({});
	res.render('system/front end/index.ejs',{gymemployee});
}

//Add gym emloyee
exports.create = async (req,res)=>{
	res.render('system/front end/employee/create employee');
}

//update gym employee
exports.update = async (req,res) =>{
	let gymemployee = await Gymemployee.findById(req.params.id);
	if(gymemployee){
		let{firstName, lastName, age, gender, joinedDate, resignedDate, shift, salary} = req.body;
		gymemployee.firstName = firstName,
		gymemployee.lastName = lastName,
		gymemployee.age = age,
		gymemployee.gender =  gender,
		gymemployee.resignedDate =  resignedDate,
		gymemployee.shift = shift,
		gymemployee.salary = salary,
		await gymemployee.save();
	};
	res.redirect('/');
};

//Edit gym employee
exports.edit = async (req, res) =>{
	let gymemployee =  await Gymemployee.findById(req.params.id); 
	res.render('system/front end/employee/edit employee',{gymemployee});
};

//Store gym employee
exports.store = async (req, res) =>{
	let {firstName, lastName, age, gender, joinedDate, ResignedDate, shift, salary} = req.body;
	let gymemployee = new Gymemployee();
	gymemployee.firstName= firstName,
	gymemployee.lastName= lastName,
	gymemployee.age= age,
	gymemployee.gender= gender,
	gymemployee.joinedDate= Date.now(),
	gymemployee.shift =  shift,
	gymemployee.salary = salary,
	await gymemployee.save();  
	res.redirect('/');
};

//Removes gym employee
exports.destroy = async(req, res) =>{
	let gymemployee = Gymemployee.findById(req.params.id)
	if(gymemployee){
		await gymemployee.remove();
	}
	res.redirect('/');
};


