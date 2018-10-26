var Menu = require('./schema.js');
var seeding = function () {
	var idCount = 1;
	for (var i = 0; i < 100; i++) {
		var data = {
			Id: i,
			Categories: []
		}
		for (var j = 0; j < 10; j++) {
			data.Categories.push({
				CategoryName: faker.fake('{{address.country}}'),
				Dishes: []
			})
			for (var k = 0; k < 10; k++) {
				data.Categories[0].Dishes.push(
					[{
						Name: faker.fake('{{commerce.productName}}'),
						Price: faker.fake('{{commerce.price}}'),
						Id: idCount,
						Spice: faker.fake('{{random.boolean}}'),
						Popular: faker.fake('{{random.boolean}}'),
						ImageUrl: faker.fake('{{image.food}}'),
						Text: faker.fake('{{hacker.phrase}}')
					}]
				);
				idCount++
			}
		}

		var menu = new Menu(data);
		menu.save(function (error, results) {
			if (error) {
				console.log(error);
			} else {
				console.log(results);
			}
		})
	}
}

seeding()