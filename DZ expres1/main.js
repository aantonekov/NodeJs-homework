const express = require('express');
const path = require('path');
const parser = require('body-parser');


const server = express();
  
    const urlParser = parser.urlencoded({extended: false});
    
    server.get("/reg", urlParser, (req, res) => {
        res.sendFile(__dirname + "/pik/index.html");
    });


    server.post("/reg", urlParser,(req, res) => {
        res.send(`${req.body.info}`)
        console.log(req.body);
    });

  
server.listen(8000);