const WebSocket = require('ws');
const http = require('http');
const fs = require('fs')

///HTTP server
const sendFile = (res, filePath, type) => {
    const fullfilePath = (`${__dirname}/${filePath}`)
        
    res.writeHead(200,{
        'Content-Type': type
    })
    
    const readeStream = fs.createReadStream(fullfilePath);
    readeStream.pipe(res)
}

const server = http.createServer((req, res) =>  {
    
    if(req.url === '/') {
        sendFile(res, 'publick/index.html','text/html')       
        return
    };

    if(req.url === '/js/main.js') {
        sendFile(res, 'publick/js/main.js','application/javascript')       
        return
    };

    res.writeHead(404);
    res.end();
});

server.listen(3000, function() {
    console.log((new Date()) + ' Server is listening on port 3000');
});

//WS Server

const wsServer = new WebSocket.Server({server});

wsServer.on('connection', (socket) => {
    console.log((new Date()) + 'New WS connnection');

    let sum = 0;
    socket.on('message', (data) => {
        sum+= Number (data);
        console.log(`Frontend send ${data}`);
        console.log(`Sum ${sum}`);

        if(sum > 10 ){
            socket.send(sum);
        }
    })



    
})




// socket.on('message', (data) => {
    //     console.log(`Frontend send ${data}`);
    // })
    // // ws.on('message', (message) => {
    //     console.log('received: %:', message);
    // })

    // ws.send('something')



// wsServer = new WSServer({
//     httpServer: server,
// });

// wsServer.on('request', (req) =>{ 

//     req.on('message',(message) => {
//     console.log('Received Message: ', message);
//     });

//     req.on('close', function(reasonCode, description) {
//         console.log((new Date()) + ' Peer ' + req.remoteAddress + ' disconnected.');
//     });

// });