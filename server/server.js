const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Admin',
        message: 'Welcome to the chat app'
    });
    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        message: 'New user joined',
        createdAt: new Date().getTime()
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });

    socket.on('createMessage', (newMessage) => {
        console.log(`Message From ${newMessage.from}`, newMessage);
        // io.emit('newMessage', {
        //     from: newMessage.from,
        //     message: newMessage.message,
        //     createdAt: new Date().getTime()
        // });

        socket.broadcast.emit('newMessage', {
            from: newMessage.from,
            message: newMessage.message,
            createdAt: new Date().getTime()
        });
    });

});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});