'use strict'

require('dotenv').config();

// init express

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const {router} = require('./router/router')

// Cors
let originOptionCors = {
    origin: `http://localhost:${PORT}`
}

// Cors Option
app.use(cors(originOptionCors));

// Express Json

app.use(express.json());

// Routing
app.use(`/`, router);

// listen to PORT
app.listen(PORT, () => console.log(`Server Connected on ${PORT}`));