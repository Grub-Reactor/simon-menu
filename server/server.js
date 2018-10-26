const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

app.get('grub-reactor/menu',function(req,res){
	
});
app.get('/',function(req, res){
    res.send()
})


app.listen(3000);