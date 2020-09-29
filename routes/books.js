const express = require('express');
const router = express.Router();

const Book = require('../models/bookModel');

router.get('/books', (req, res) => {

  Book.findAll().then(books => {

    function filterBooks(query) {
      var booksFiltered = [];
      if (query.book && query.book !== '') {
        for (book in books) {
          if (books[book].title.toLowerCase().includes(query.book.toLowerCase())) {
            booksFiltered.push(books[book]);
          }
        }
      } else if (query.subject && query.subject !== '') {
        for (book in books) {
          if (books[book].subject.toLowerCase().includes(query.subject.toLowerCase()) ) {
            booksFiltered.push(books[book]);
          }
        }
      } else if (query.teacher && query.teacher !== '') {
        for (book in books) {
          if (books[book].teacher.toLowerCase().includes(query.teacher.toLowerCase())) {
            booksFiltered.push(books[book]);
          }
        }
      } else {
        return books;
      }
      
      return booksFiltered;
    }

    res.status(200).json(filterBooks(req.query));
  });

});

router.post('/books', (req, res) => {
  const book = Book.create({
    title: req.body.title,
    author: req.body.author,
    teacher: req.body.teacher,
    sujbject: req.body.subject,
    filename: req.body.filename
  });
  res.status(200).json({"message": "Book created!"});
});

router.put('/books', (req, res) => {
  const book = Book.create({
    title: req.body.title,
    author: req.body.author,
    teacher: req.body.teacher,
    sujbject: req.body.subject,
    filename: req.body.filename
  });
  res.status(200).json({"message": "Book modified!"});
});

module.exports = router;