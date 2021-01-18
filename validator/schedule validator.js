const {checkSchema} = require('express-validator');

let scheduleValidator = checkSchema({
	'trainerName' : {
		isLength: {
			errorMessage: 'Trainer name is required',
			options: { min: 2 },
			trim: true,
		}
	},
	'startingTime' : {
		
		isLength: {
			errorMessage: 'Time is required',
			options: { min: 2 },
			trim: true,
		},
    },
    'endingTime' : {
		
		isLength: {
			errorMessage: 'Time is required',
			options: { min: 2 },
			trim: true,
		},
    },
    'days' : {
		isLength: {
			errorMessage: 'days is required',
			options: { min: 2 },
			trim: true,
		}
	},     
});  

module.exports = scheduleValidator; 