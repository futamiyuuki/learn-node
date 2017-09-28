var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Chaeyoung',
    text: 'Hello'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(msg) {
  console.log(`${msg.from} said ${msg.text} at ${msg.createdAt}`);
});