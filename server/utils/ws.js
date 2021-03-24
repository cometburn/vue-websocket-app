var socket = require('socket.io');

var wsSocket = (function () {
  this.io = null;
  this.clients = []
  this.configure = function (server) {

    this.io = require('socket.io')(server, {

      transports: ['websocket'],
      cors: {
        origin: [process.env.API, "http://127.0.0.1:9010", "http://localhost:9010"],
        methods: ["GET", "POST"]
      }
    });

    this.io.on('connection', (client) => {
      client.on('disconnect', (client) => {
        console.log('client disconnected: ', client);
      });

      client.on('message', (message) => {
        io.to(client.id).emit('hey: ', client.id)
      });

      client.on('broadcast', (message) => {
        io.emit('message', message)
      });
    });


    this.io.on('connect', (client) => {
      console.log('client connected: ', client.id);
    });

  }

  return this;
})();

module.exports = wsSocket;