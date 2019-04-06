var socket = io();

socket.on('connect', function(message) {
    console.log('Connected to server');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log(`Message from ${message.from}`, message);
});
