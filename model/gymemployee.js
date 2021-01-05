const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gymemployeeSchema = new Schema({
	firstName: {type: String},
	lastName: {type: String},
	age: {type: Number},
	gender: {type: String},
	joinedDate: {type: String},
	resignedDate: {type: Number},
	shift: {type: String},
	salary: {type: String},
	action: {type: String},
});

module.exports = mongoose.model('gymemployee', gymemployeeSchema);