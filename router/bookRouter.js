'use strict'
// Initialization library
const express = require("express");
const router = express.Router({ mergeParams: true });
const { BookController } = require("../controller/bookController");

// Routing Books
// router.get('/', BookController);

// Routing allbooks
router.get('/', BookController.getAllBooks);

// Routing books by id
// router.get('/:id',BookController.getBooksById);

// Routing addNewBooks
// router.post('/add/:id',BookController.addNewbooks);

// Routing UpdateBooks
// router.put('/update/:id',BookController.updateBook);

// Routing DeleteBooks
// router.delete('/delete/:id',BookController.deleteBook);


module.exports = {BookRouter: router};
