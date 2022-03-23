"use strict";
// Initialization library
const express = require("express");
const bookRouter = express.Router();
const { BookController } = require("../controller/bookController");

// Routing Books
// router.get('/', BookController);

// Routing allbooks
bookRouter.get("/", BookController.getAllBooks);

// Routing showAllBooks
// bookRouter.get('/',BookController.showAllBooks);

// Routing getBookById
bookRouter.get("/:id", BookController.getBookById);

// Routing addNewBooks
// router.post('/add',BookController.addNewbooks);

// Routing UpdateBooks
// router.put('/update/:id',BookController.updateBook);

// Routing DeleteBooks
// router.delete('/delete/:id',BookController.deleteBook);

module.exports = {
  bookRouter,
};
