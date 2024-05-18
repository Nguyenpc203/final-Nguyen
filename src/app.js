const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

require('./dbs/mongodb');

app.use('/', require('./routes'));

module.exports = app;



