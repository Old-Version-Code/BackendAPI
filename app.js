const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('./db.js');

const app = express();

const port = process.env.PORT || 3000;

const router =require('../BackEnd API/Routers_File/routes.js');
app.use(bodyParser.json());

app.use(cors({origin:'http://localhost:4200'}))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use('/post', router);

app.use('/regstration', router);