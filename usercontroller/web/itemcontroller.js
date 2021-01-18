const mongoose = require('mongoose');
// const item = mongoose.model('Item');

//View all items 
exports.index = async (req, res) =>{
	// let item = await Item.find({});
	res.render('system/front end/product/item',{});
};