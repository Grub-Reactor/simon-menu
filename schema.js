const mongoose = require('mongoose');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/menu');
// mongoose.Promise = global.Promise;

const menuSchema = new mongoose.Schema({
  category: String,
  price: Number,
  imageUrl: String,
  itemName: text,
  spice: Boolean,
  popular:Boolean,
  itemId: Number
  } 
);

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;



