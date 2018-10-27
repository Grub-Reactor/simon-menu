const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/menu');
mongoose.Promise = global.Promise;
var faker = require('faker');

const restaurantSchema = new mongoose.Schema({

	id: Number,
	categories: [{
		categoryName: String,
		dishes: [{
			name: String,
			price: Number,
			id: Number,
			spice: Boolean,
			popular: Boolean,
			imageUrl: String,
			text: String
		}]
	}]
});

const Menu = mongoose.model('Menu', restaurantSchema);

module.exports = Menu;