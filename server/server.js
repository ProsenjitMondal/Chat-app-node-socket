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

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });

    socket.on('createMessage', (newMessage) => {
        console.log(`Message From ${newMessage.from}`, newMessage);
    });


    socket.emit('newMessage', {
        from: 'John',
        message: 'what\'s up?',
        createdAt: 123
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});