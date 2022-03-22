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

  static selectAllBooks(result) {
    let sqlQuery = `SELECT * FROM book`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log("This is Error /n", err);
        result(null, res);
      } else {
        console.log("result", res);
        result(null, res);
      }
    });
  };

  static selectBooksById(result) {
    let sqlQuery = `SELECT * FROM book where id = 1`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log("This is Error /n", err);
        result(err, res);

      } else {
        console.log("result", res);
        result(result, res);
      }
    });
  };
}

module.exports = {
  Book,
};
