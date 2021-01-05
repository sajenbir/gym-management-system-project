const mongoose = require('mongoose');
const gymemployee = mongoose.model('gymemployee');
 
exports.get = async (req, res) => {
try{
		let  = await Gymemployee.find({});
		res.json({data: gymemployee});
	} catch(e) {
		console.log(e);
		res.status(400).json({error: 'Bad request'});
	}
}

exports.store = async (req, res) => {
	try{
		let {firstName, lastName, age, shift, salary, gender, joinedDate} = req.body;
		let employee = new employee();
		gymemployee.firstName = firstName;
		gymemployee.lastName = lastName;
		gymemployee.age = age;
		gymemployee.gender = gender;
		gymemployee.joinedDate = Date.now();
		gymemployee.resignedDate = Date.now();
		gymemployee.shift = shift;
		gymemployee.salary = salary;
		await gymemployee.save();
		res.json({data: gymemployee});
	}catch(e) {
		res.status(400).json({error: 'Bad Request'});
	}
	
}

exports.update = async (req, res) => {
	try{
		let gymemployee = await Gymemployee.findById(req.params.id);
		if(!gymemployee){
			return res.status(404).json({error: 'Data not found'});
		}
		let {firstName, lastName, salary, shift} = req.body;
		gymemployee.firstName = firstName;
		gymemployee.lastName = lastName;
		gymemployee.age = age;
		gymemployee.salary = salary;
		gymemployee.shift = shift;
		await gymemployee.save();
		res.json({data: gymemployee})
	}catch(e) {
		res.status(400).json({error: 'Bad Request'});
	}
}

exports.view = async(req, res) => {
	try {
		let gymemployee = await gymemployee.findById(req.params.id);
		res.json({data: gymemployee})
	} catch{
		res.status(400).json({error: 'Bad Request'});
	}
	
}

exports.destroy = async (req, res) => {
	try{
		let gymemployee = await gymemployee.findById(req.params.id);
		if(user) {
		 await gymemployee.remove();
		}
		res.status(204).json({});
	} catch {
		res.status(400).json({error: 'Bad Request'});
	}
}