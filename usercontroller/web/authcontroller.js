const mongoose =  require('mongoose');
const register =  mongoose.model('register');
const passport = require('passport');

exports.registerView =(req, res) =>{
    res.render('system/front end/authentication/register');
}

exports.loginView = (req,res) =>{
    res.render('system/front end/authentication/login');
} 

exports.checkIfLoggedIn = (req, res, next) => {
	if(req.isAuthenticated()) {
		req.flash('alerts', {type:'warning', message: "You're already logged in"})
		res.redirect('/')
	}
	next();
};


exports.login = (req,res,next) => {
    passport.authenticate('local', (err, user, info) =>{
        if(err){
            req.flash('alerts', {
                type: 'danger',
                message: 'Invalid email or password'
            });
        }
        if(!user){
            req.flash('alerts', {
                type: 'danger',
                message: 'Invalid email or password'
            });
            return res.redirect('/login');
        }
        req.logIn(user,(err) =>{
            if(err){
                req.flash('alerts', {
                    type: 'danger',
                    message: 'Invalid email or password'
                });
            }
            return res.redirect('/login');
        })
    })(req, res, next)
};

exports.register = async(req,res) =>{
    let{Email, firstname, lastName, age, address, gender, contactNumber, password} = req.body;
    try{
        let err = await User.register({
            Email,firstName, lastName, address, phone, age
        }, password);
        req.flash('alerts',{
            type: 'success',
            message: 'User registration sucessful'
        });
        res.redirect('/login');  
    }catch (e) {
        console.log(e);
        req.flash('alerts', {
            type: 'danger',
            message: 'Error during registration !'
        });
        res.redirect('/register');
    }
    
};