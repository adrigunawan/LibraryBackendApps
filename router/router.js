"use strict"

const express = require("express");
const router = express.Router();
const { Controller } = require("../controller/Controller");
const { bookRouter } = require("./bookRouter");

// Router homepage
router.get("/", Controller.homepage);

// Router login
// router.post('/login', Controller.login);

// Routing register
// router.post('/register', Controller.register);

// Routing book
router.use("/books", bookRouter);

// Routing user

module.exports = { router };
