'use strict';

const sql = require('../config/db.config');

class Book {
    constructor (judul, penerbit, pengarang, tahunrilis) {
        this.judul = judul,
        this.penerbit = penerbit,
        this.oengarang = pengarang,
        this.tahunrilis = tahunrilis;
    }
    static selectAllBooks(req, res) {
        res.send(Book.selectAllBooks)
    }
};

module.exports = {
    Book
}