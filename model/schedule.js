const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
	className: {type: String},
	trainerName: {type: String},
	startingTime: {type: String},
	endingTime: {type: String},
	days: {type: String},
});

module.exports = mongoose.model('schedule', scheduleSchema);