const express = require('express');
const router = express.Router();

const Book = require('../models/bookModel');

router.get('/books', (req, res) => {

  Book.findAll().then((books) => {

    function filterBooks(query) {
      var booksFiltered = [];
      if (query.book && query.book !== '') {
        for (book in books) {
          if (books[book].title) {
            if (books[book].title.toLowerCase().includes(query.book.toLowerCase())) {
              booksFiltered.push(books[book]);
            }
          }
        }
      } else if (query.subject && query.subject !== '') {
        for (book in books) {
          if (books[book].subject) {
            if (books[book].subject.toLowerCase().includes(query.subject.toLowerCase())) {
              booksFiltered.push(books[book]);
            }
          }
        }
      } else if (query.teacher && query.teacher !== '') {
        for (book in books) {
          if (books[book].teacher) {
            if (books[book].teacher.toLowerCase().includes(query.teacher.toLowerCase())) {
              booksFiltered.push(books[book]);
            }
          }
        }
      } else {
        return books;
      }
      
      return booksFiltered;
    }

    res.status(200).json(filterBooks(req.query));
  }).catch((err) => console.log(err));

});

router.get('/books/:id', (req, res) => {
  const book = Book.findOne({where: {"book_id": req.params.id}}).then((data) => {
    res.status(200).json({
      "book_id": data.book_id,
      "title": data.title,
      "author": data.author,
      "teacher": data.teacher,
      "subject": data.subject,
      "filename": data.filename
    })
  })
  
})

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

router.put('/books/:id', (req, res) => {
  const book = Book.update({
    title: req.body.title,
    author: req.body.author,
    teacher: req.body.teacher,
    sujbject: req.body.subject,
    filename: req.body.filename
  }, {where: {book_id: req.params.id}});

  res.status(200).json({"message": "Book modified!"});
});

router.delete('/books/:id', (req, res) => {
  Book.destroy({where: {book_id: req.params.id}})
  
  res.status(200).json({"message": "Book deleted!"})
})

module.exports = router;