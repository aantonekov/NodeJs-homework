const express = require('express');

const sendFile = express.Router();

sendFile.get('/', (req, res) => {
    res.render('shablonHtml')
});

module.exports = sendFile;