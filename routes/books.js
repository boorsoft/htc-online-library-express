const express = require('express');
const router = express.Router();

const Book = require('../models/bookModel');

router.get('/books', (req, res) => {
  Book.findAll().then(books => {
    
  });

  res.json([]);
});

module.exports = router;