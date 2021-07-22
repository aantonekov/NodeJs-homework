const path = require('path');
const express = require('express');


const routerMain = require('./routs/main.js');


const server = express();

server.set('views',  path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname, 'public')));

server.use('/', routerMain);


server.listen(8000);

