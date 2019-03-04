const express = require('express');
const BodyParser = require('body-parser');

const db = require('../models');
const routes = require('./routes')(express,db);
const port = process.env.PORT || 3003;

const app = express();
app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());

app.use('/api', routes);

app.listen(port, console.log(`The server is waiting for connection on port: ${port}`));

require('./database');