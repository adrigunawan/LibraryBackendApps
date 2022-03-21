'use strict'
const express = require('express');
const router = express.Router();
const {Controller} = require('../controller/Controller');
const {BookRouter} = require('./BookRouter');
const {UserRouter} = require('./UserRouter');


// Router homepage
router.get('/', Controller.homepage);

// Router login
// router.post('/login', Controller.login);

// Routing register
// router.post('/register', Controller.register);

// Routing book
router.use('/books', BookRouter);

// Routing user
router.use ('/users', UserRouter);

module.exports = {router};