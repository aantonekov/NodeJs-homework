const sio = require('socket.io');

const run = (httpServer) => {

    const io = sio(httpServer)

    io.on('connection', (socket) => {
        console.log(`Connection ID: ${socket.id}`);

        socket.on('chat message', (data) => {
            io.emit('chat message', {
                message: data.message,
                name: data.name 
            })
        })

        socket.on('disconnect', (data) => {
            console.log(`Disconectio ID: ${socket.id}`);
        })        

    })
  
}

module.exports = run;