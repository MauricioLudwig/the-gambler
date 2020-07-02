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

  socket.on('game-list', (data) => {
    renderGamesList(data);
  });

  const renderGamesList = (games) => {
    const gameList = $('#game-list-picker');
    gameList.empty();

    games.forEach((game) => {
      $('<option />', {
        value: game.id,
        html: game.name
      }).appendTo(gameList);
    });
  };

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

  $('#remove-game-form').on('submit', function (e) {
    e.preventDefault();

    const gameId = $('#game-list-picker').find(':selected').val();

    if (!gameId) {
      alert('you must select a game!');
      return;
    }

    socket.emit('remove-game', { gameId });
  });
});