const express =  require('express');
const bodyParser =  require('body-parser');
const apiRoutes =  require('./routes/member/web.js');
const webRoutes =  require('./routes/member/web.js');
const apiRoute =  require('./routes/class schedule/schedule.js');
const webRoute =  require('./routes/class schedule/schedule.js');
const apiRouter = require('./routes/product/items.js');
const webRouter =  require('./routes/product/items.js');
const expressValidator = require('express-validator');
const {flashValidatorError} =  require('./handler/errorhandler'); 
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose')
const methodOverride = require('method-override');



const app = express();
const port = 8000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser,json());



// // app.use(expressValidator());
// app.use(flashValidatorError());
 
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(session({
	secret: process.env.SECRET,
	key: process.env.KEY,
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({
		mongooseConnection: mongoose.connection
	})
}))

app.use(methodOverride(('_method')));

app.use(flash());
app.use((req, res, next) => {
	res.locals.oldInput = req.flash('oldInput')[0] || {};
	res.locals.errors = req.flash('errors')[0] || {};
	res.locals.alerts = req.flash('alerts')[0] || {};
	res.locals.flashes = req.flash();
	res.locals.auth = req.user || null;
	next();
});
app.use('/api', apiRoutes);
app.use('/', webRoutes);
app.use('api', apiRoute);
app.use('/', webRoute);
app.use('api', apiRouter);
app.use('/', webRouter);


app.listen(port, () => {
	console.log(`Application is running on port: ${port}`);
})

module.exports = app