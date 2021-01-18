const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
	firstName: {type: String},
	lastName: {type: String},
	age: {type: Number},
	gender: {type: String},
	joinedDate: {type: Date},
});

module.exports = mongoose.model('Member', MemberSchema);