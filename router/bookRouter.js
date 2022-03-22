"use strict";
// Initialization library
const express = require("express");
const bookRouter = express.Router();
const { BookController } = require("../controller/bookController");

// Routing Books
// router.get('/', BookController);

// Routing allbooks
bookRouter.get("/", BookController.getAllBooks);

// Routing books by id
bookRouter.get('/id',BookController.getBooksById);

// Routing addNewBooks
// router.post('/add/:id',BookController.addNewbooks);

// Routing UpdateBooks
// router.put('/update/:id',BookController.updateBook);

// Routing DeleteBooks
// router.delete('/delete/:id',BookController.deleteBook);

module.exports = {
  bookRouter,
};
