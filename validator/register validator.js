const {checkSchema} = require('express-validator');


let authValidator = checkSchema({
    'Email' : {
        isLength:{
            errorMessage: 'Email is required',
            options: { min: 1 },
            trim: true,
        },
        isEmail :{
            errorMessage: 'Email is required',
        }
    },
    'firstName' : {
        isLength: {
			errorMessage: 'First name is required',
			options: { min: 2 },
			trim: true,
		}
    },
    'lastName' : {
        isLength: {
            errorMessage: 'Last name is required',
            options: { min: 2 },
            trim: true,
        }
    },
    'age' : {
        isInt: true,
        isLength: {
            errorMessage: 'Age is required',
            options: { min: 2 },
            trim: true,
        },
    },
    'address' :{
        isLength :{
            errorMessage: 'Address is required',
            options: {min: 3},
            trim: true,
        }
    },
    'contactNumber' :{
        isLength:{
            errorMessage: 'Contact number is required',
            options: {min:5},
            trim: true,
        }
    },
    'password' :{
        isLength:{
            errorMessage: 'Password is required of minimum 3 and max 15',
            options: {min:3, max: 15},
            trim: true,
        }
    }    
});  

module.exports = authValidator;