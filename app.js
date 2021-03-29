const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const booksRoutes = require('./routes/books');
const usersRoutes = require('./routes/users');

const Book = require('./models/bookModel');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: 'https://htc-online-library-react.boorsoft.repl.co'
}));

app.use('/api', booksRoutes);
app.use('/user', usersRoutes);

module.exports = app;