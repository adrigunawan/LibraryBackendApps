'use strict'
class BookController {
    static getAllBooks (req, res) {
        res.send('Halaman Buku')
    }
    static getBooksById (req,res) {
        res.res();
    }

    static addNewbooks (req,res) {
        res.send()
    }

    static updateBook (req,res) {
        res.send()
    }

    static deleteBook (req,res) {
        res.send()
    }
}

module.exports = {BookController}