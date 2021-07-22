const http = require('http');
const fs = require('fs');


http.createServer((req,res) => {

    const writeStream = fs.createWriteStream('./index.css');

    req.pipe(writeStream);



    req.on('end', function () {
        res.writeHead(200, {"content-type":"text/html"});
        res.end('<form method="POST"><input name="test" /><input type="submit"></form>');
    
    });
   
    writeStream.on('error', function (err) {
        console.log(err);
      });

}).listen(8000); 