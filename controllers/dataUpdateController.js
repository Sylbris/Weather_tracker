
//update data on socket.
exports.updateWeather = function (socket) {
    const intervalId = setInterval(() => {
      const date = new Date().toLocaleString()
      socket.emit('update', {greeting: date});
    }, 1000);
  
  }