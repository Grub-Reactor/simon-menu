var Menu = require('./schema.js');
var faker = require('faker');
var mongoose = require('mongoose');
var image = ['https://s3-us-west-1.amazonaws.com/grubreactor/abstract-barbecue-barbeque-bbq-161519.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/abstract-barbecue-barbeque-bbq-161519.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/brownie-dessert-cake-sweet-45202.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-106343.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-156114.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-236781.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-262959.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-629093.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/pexels-photo-718742.jpeg',
    'https://s3-us-west-1.amazonaws.com/grubreactor/salmon-dish-food-meal-46239.jpeg'];
var random = function(){
    var index = Math.floor(Math.random()*10);
    return image[index];
};
var seeding = function () {
    var promises =[];
    var idCount = 1;
    for (var i = 0; i < 100; i++) { 
        var data = {
            id: i,
            categories: []
        };
        for (var j = 0; j < 10; j++) {
            data.categories.push({
                categoryName: faker.fake('{{address.country}}'),
                dishes: []
            });
            for (var k = 0; k < 10; k++) {
                data.categories[j].dishes.push(
                    {
                        name: faker.fake('{{commerce.productName}}'),
                        price: faker.fake('{{commerce.price}}'),
                        id: idCount,
                        spice: faker.fake('{{random.boolean}}'),
                        popular: faker.fake('{{random.boolean}}'),
                        imageUrl: random(),
                        text: faker.fake('{{hacker.phrase}}')
                    }
                );
                idCount++;
               
            }
        }

        var menu = new Menu(data);
        
        var men = menu.save();
        promises.push(men);
    }
    Promise.all(promises).then(function(){
        mongoose.connection.close();
    });
};

seeding();
