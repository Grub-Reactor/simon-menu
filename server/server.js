const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const menu = require('../schema.js');

app.use(bodyParser.json());

app.use('/grub-reactor/:id', express.static(path.join(__dirname, '../public')));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept',
	);
	next();
});

app.get('/grub-reactor/:id/menu', (req, res) => {
	menu.find({
			id: req.params.id,
		},
		(error, results) => {
			if (error) {
				res.status(404).send();
			} else {
				res.send(results);
			}
		}, );
});

app.listen(3001);