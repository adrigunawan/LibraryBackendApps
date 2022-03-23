"use strict";

/* 
1. add book model to book controller
*/

const { Book } = require("../model/Book");

class BookController {
  static getAllBooks(req, res) {
    Book.showAllBooks((err, data) => {
      if (err) {
        console.log("Error", err);
      } else {
        res.json({
          title: "API Backend Pustaka",
          message: "Koleksi Buku",
          status: 200,
          data,
        });
      }
    });
  }

  /*static showAllBooks(req, res) {
    Book.selectBooksById((err, data) => {
      
      if (err) {
        console.log('Error', err);
        
      } else {

        res.json({
          title: "API Backend Pustaka",
          message: "Koleksi Buku",
          status: 200,
          data,

        })
      }
    })
  };*/

  static getBookById(req, res) {
    // console.log("ini id", req.params);

    const { id } = req.params;
    Book.showBookById (id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json({

          title: "API Backend Pustaka",
          message: "Koleksi Buku",
          status: 200,
          data
        });
      }
    });
  }
}

module.exports = { BookController };
