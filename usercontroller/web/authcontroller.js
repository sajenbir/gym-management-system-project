const mongoose =  require('mongoose');
const register =  mongoose.model('register');

exports.registerView =async (req, res) =>{
    res.render('system/front end/authentication/register');
}
exports.register = async(req,res) =>{
    let{Email, firstname, lastName, age, address, gender, contactNumber, password} = req.body;
    let register =  new Register();
    register.Email = Email;
    register.firstName = firstName;
    register.lastName = lastName;
    register.age = age;
    register.address =  address;
    register.gender = gender;
    register.contactNumber =  contactNumber;
    await register.register(user, password);
     req.flash({
         type: 'sucess',
         message: 'User registration sucessful'
     })
     res.render('/login');
}