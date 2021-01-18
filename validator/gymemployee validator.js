const {checkSchema} = require('express-validator');

let employeeValidator = checkSchema({
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
            errorMessage: 'Age is required and must be greater than 18',
            options: { min: 2 },
            trim: true,
        },
        isFloat:{
            errorMessage: 'Age should be 18 or greater',
            options:{
                min: 17,
            }
        },
    },
    'shift' : {
        isLength: {
            errorMessage: 'shift is required',
            options: { min: 2 },
            trim: true,
        }
    },
    'salary' : {
        isInt: true, 
        isLength: {
            errorMessage: 'salary is required',
            options: { min: 2 },
            trim: true,
        }
    },
    
});  

module.exports = employeeValidator; 