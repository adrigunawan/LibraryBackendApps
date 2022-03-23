"use strict";

const sql = require("../config/db");
/* 
1. initialization 
2. Bikin Class Book
*/

/* 
1. Bikin Static Method
=======================
Select All Book
Show Book By Id
Post New Book
update book data
delete book
*/

class Book {
  constructor(
    id,
    book_title,
    book_author,
    book_genre,
    book_isbn,
    book_year,
    book_price,
    book_stock,
    create_at,
    update_at
  ) {
    (this.id = id),
      (this.book_title = book_title),
      (this.book_author = book_author),
      (this.book_genre = book_genre),
      (this.book_isbn = book_isbn),
      (this.book_year = book_year),
      (this.book_price = book_price),
      (this.book_stock = book_stock),
      (this.create_at = create_at),
      (this.update_at = update_at);
  }

  /* 

    SQL Connection
    Query SQL Command 
    Get Result
    Change To Object Instance
    Send To Book Controller
    
    */

  static showAllBooks(result) {
    let sqlQuery = `SELECT * FROM book`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log("This is Error /n", err);
        result(null, res);
      } else {
        let rawData = res;
        let books = [];
        let book;

        rawData.forEach((eachData) => {
          book = new Book(
            eachData.id,
            eachData.book_title,
            eachData.book_author,
            eachData.book_genre,
            eachData.book_isbn,
            eachData.book_year,
            eachData.book_price,
            eachData.book_stock,
            eachData.create_at,
            eachData.update_at
          );

          books.push(book);
        });

        console.log("result", res);
        result(null, books);
      }
    });
  }

  static showBookById(id, result) {
    let sqlQuery = `SELECT * FROM book WHERE id = ${id}`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log("This is Error /n", err);
        result (null, res);
      } else {
        let rawData = res;
        let books = [];
        let book;

        rawData.forEach((eachData) => {
          book = new Book(
            eachData.id,
            eachData.book_title,
            eachData.book_author,
            eachData.book_genre,
            eachData.book_isbn,
            eachData.book_year,
            eachData.book_price,
            eachData.book_stock,
            eachData.create_at,
            eachData.update_at
          );
          books.push(book);
        });

        console.log("result", res);
        result(null, books);
      }
    });
  }

  static updateBookById (res, req) {

  }
}
module.exports = {
  Book,
};
