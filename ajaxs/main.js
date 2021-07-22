const path = require('path');
const express = require('express');

const routerMain = require('./routes/main.js');
const routerArticle = require('./routes/article.js');


const server = express();

server.set('veiws',  path.join(__dirname, 'veiws'));
server.set('views engine', 'ejs');

server.use(express.static(path.join(__dirname, 'public')));

server.use('/', routerMain);
server.use('/artic', routerArticle);

server.listen(8000);