const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const booksRoutes = require('./routes/books');

const Book = require('./models/bookModel');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', booksRoutes);
app.get('/admin/books', (req, res) => {
  Book.findAll().then(books => {
    
  })
  res.sendFile(path.join(__dirname, 'public/admin.html'));
});

module.exports = app;