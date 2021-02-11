 const mongoose = require('mongoose');
require('dotenv').config({path:'.env'});



(async () => {
	try{
		await mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});
		console.log('Mongodb is successfully connected');
	} catch(e) {
		console.log("Error connnecting mongodb. Reason:", e)
	}
})();

require('./model/register.js');
require('./model/schedule.js');
require('./model/gymemployee.js');
require('./model/member.js');
require('./index.js');