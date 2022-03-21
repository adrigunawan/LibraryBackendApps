'use strict'
class Controller {

    static homepage(req,res) {
        res.send('Halaman Controller');
    }

    static login(req, res) {
        res.send('Halaman login');
    }

    static register(req, res) {
        res.send('Halaman register');
    }
}

module.exports = {Controller};