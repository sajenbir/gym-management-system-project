const passport = require('passport');
const mongoose =  require('mongoose');
const register = mongoose.model('register');

passport.use(register.createStrategy());

passport.serializeUser(register.serializeUser());
passport.deserializeUser(register.deserializeUser());

