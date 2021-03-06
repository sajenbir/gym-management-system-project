const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gymemployeeSchema = new Schema({
	firstName: {type: String},
	lastName: {type: String},
	age: {type: Number},
	gender: {type: String},
	joinedDate: {type: Date},
	resignedDate: {type: Date},
	shift: {type: String},
	salary: {type: Number},
});

module.exports = mongoose.model('gymemployee', gymemployeeSchema);