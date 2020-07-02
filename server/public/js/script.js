$(document).ready(() => {
  const socket = io();
  let activeClients = [];

  socket.on('user-connected', ({ userId, name }) => {
    activeClients.push({ userId, name });
    renderClientList();
  });

  socket.on('user-disconnected', ({ userId }) => {
    activeClients = activeClients.filter(o => o.userId !== userId);
    renderClientList();
  });

  const renderClientList = () => {
    $('#client-list-picker').empty();

    activeClients.forEach((client) => {
      $('<option />', {
        value: client.userId,
        html: client.name
      }).appendTo('#client-list-picker');
    });
  };

  $('#message-form').on('submit', function (e) {
    e.preventDefault();

    const userId = $('#client-list-picker').find(':selected').val();
    const message = $('#message').val();

    if (!userId) {
      alert('you must select a client!');
      return;
    }

    socket.emit('send-message', { userId, message });
  });

  $('#raise-level-btn').on('click', function () {
    socket.emit('raise-level');
  });

  $('#new-game-form').on('submit', function (e) {
    e.preventDefault();

    const name = $('#game-name').val();
    const category = $('#game-category').val();

    socket.emit('add-new-game', { name, category });
  });
});