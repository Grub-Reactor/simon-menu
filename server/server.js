const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const menu = require('../schema.js');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));


app.get('/grub-reactor/menu', function (req, res) {
    menu.find(function (error, results) {
        if (error) {
            res.status(404).send();
        } else {
            res.send(results);
        }
    });
});


app.listen(3001);