'use strict'

const express = require('express');
const router = express.Router({mergeParams: true});
const {UserController} = require('../controller/userController');



module.exports = {UserRouter:router};