const path = require('path');
const express = require('express');
const multer = require('multer')

const routerMain = require('./routes/main.js');
const testRouter = require('./routes/test')


const server = express();

server.set('veiws',  path.join(__dirname, 'veiws'));
server.set('views engine', 'ejs');

server.use(express.static(path.join(__dirname, 'public')));

server.use('/', routerMain);
server.use('/test', testRouter);

server.listen(8000);
