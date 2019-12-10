const express = require('express');

const app = express();

app.set('views', './server/app/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('index');
});

module.exports = app;
