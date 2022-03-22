"use strict";

/* 
1. add book model to book controller
*/

const { Book } = require("../model/Book");

class BookController {

  static getAllBooks(req, res) {
    Book.selectAllBooks((err, data) => {
      
      if (err) {
        console.log('Error', err);
        
      } else {
        console.log('data', data);
      }
    })
  };
  
  static getBooksById(req, res) {
    Book.selectBooksById((err, id) => {
      
      if (err) {
        console.log('Error', err);
        
      } else {
        console.log('data', id);
      }
    })
  };
};

module.exports = { BookController };
