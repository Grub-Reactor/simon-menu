var Menu = require('./schema.js');
var seeding = function () {
	var idCount = 1;
	for (var i = 0; i < 100; i++) {
		var data = {
			id: i,
			categories: []
		}
		for (var j = 0; j < 10; j++) {
			data.categories.push({
				categoryName: faker.fake('{{address.country}}'),
				dishes: []
			})
			for (var k = 0; k < 10; k++) {
				data.categories[0].dishes.push(
					[{
						name: faker.fake('{{commerce.productName}}'),
						price: faker.fake('{{commerce.price}}'),
						id: idCount,
						spice: faker.fake('{{random.boolean}}'),
						popular: faker.fake('{{random.boolean}}'),
						imageUrl: faker.fake('{{image.food}}'),
						text: faker.fake('{{hacker.phrase}}')
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