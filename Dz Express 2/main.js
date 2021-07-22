const express = require('express');
const path = require('path');
const sendFile = require('./routes/sendFile.js')
const meny = require('./routes/meny.js')



const server = express();

    server.set('views', path.join(__dirname, 'views'));
    server.set('view engine', 'ejs');

    server.use('/public', express.static('public'));

     server.use('/', sendFile);
     server.use('/meny', meny);

server.listen(8000);
