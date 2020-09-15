const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const booksRoutes = require('./routes/books');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', booksRoutes);

module.exports = app;