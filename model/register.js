const mongoose = require(mongoose);
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    name = {type:String},
    contactNumber = {type:number},
});

module.exports = mongoose.model('register', registerSchema)

