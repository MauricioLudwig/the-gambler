$(document).ready(() => {
  const socket = io();
  let activeClients = [];

  socket.on('user-connected', ({ userId }) => {
    activeClients.push(userId);
    renderClientList();
  });

  socket.on('user-disconnected', ({ userId }) => {
    activeClients = activeClients.filter(o => o !== userId);
    renderClientList();
  });

  const renderClientList = () => {
  };

  $('#send-message-btn').on('click', function () {
    const text = $('#lazy-message-list').find(':selected').text();

    const data = {
      message: text,
      userId: '123' // hard coded for now
    }

    console.log('send-message', data);

    socket.emit('send-message', data, (error) => {
      console.log('send-message error', error);
    });
  });

  $('#raise-level-btn').on('click', () => {
    socket.emit('raise-level');
  });
});