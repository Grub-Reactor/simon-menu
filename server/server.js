const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const menu = require('../schema.js');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));


app.get('/grub-reactor/menu', function (req, res) {
    console.log(req.body)
    menu.find(function (error, results) {
        if (error) {
            console.log('this is error', error)
            res.status(404).send();
        } else {
            console.log('these are ', results)
            res.send(results);
        }
    })
})


app.listen(3001);