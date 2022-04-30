// main dependences
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
// include rest
const file_uploader = require('express-fileupload');
const errorHandler = require('./apiError/errorHandler');
const path = require('path');
const router = require('./routers/sneakers');

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(file_uploader());
app.use(cors({origin: process.env.CLIENT_URL}));

app.use('/api', router);
app.use(errorHandler);

console.log('preparing to launch server...');
(async () => {
    const PORT = process.env.PORT || 5000;

    mongoose.connect(process.env.DB_URL, () => {
        console.log('connected to date base');
    });
    app.listen(PORT, () => {
        console.log('server is working');
    });
})()