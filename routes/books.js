const express = require('express');
const router = express.Router();

const Book = require('../models/bookModel');

router.get('/books', (req, res) => {

  Book.findAll().then(books => {

    function filterBooks(query) {
      var booksFiltered = [];
      for (book in books) {
        if (books[book].title.toLowerCase().startsWith(query.title.toLowerCase())) {
          booksFiltered.push(books[book]);
        }
      }
      return booksFiltered;
    }

    res.status(200).json(filterBooks(req.query));
  });

});

module.exports = router;