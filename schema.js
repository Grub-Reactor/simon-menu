const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/menu');
mongoose.Promise = global.Promise;
var faker = require('faker');

const restaurantSchema = new mongoose.Schema({

	Id: Number,
	Categories: [{
		CategoryName: String,
		Dishes: [{
			Name: String,
			Price: Number,
			Id: Number,
			Spice: Boolean,
			Popular: Boolean,
			ImageUrl: String,
			Text: String
		}]
	}]
});

const Menu = mongoose.model('Menu', restaurantSchema);
// var data = {
// 	Id: 1,
// 	Categories: [{
// 		CategoryName: faker.fake('{{address.country}}'),
// 		Dishes: [{
// 			Name: faker.fake('{{commerce.productName}}'),
// 			Price: faker.fake('{{commerce.price}}'),
// 			Id: 1,
// 			Spice: faker.fake('{{random.boolean}}'),
// 			Popular: faker.fake('{{random.boolean}}'),
// 			ImageUrl: faker.fake('{{image.food}}'),
// 			Text: faker.fake('{{hacker.phrase}}')
// 		}]
// 	}]
// };






module.exports = Menu;