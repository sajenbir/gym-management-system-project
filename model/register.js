const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const registerSchema = new Schema({
    Email : {type:String},
    firstName: {type: String},
	lastName: {type: String},
	age: {type: Number},
    address:{type:String},
	gender: {type: String},
    contactNumber: {type: Number},
});

registerSchema.plugin(passportLocalMongoose, {usernameField: 'Email'})
module.exports = mongoose.model('register', registerSchema);

