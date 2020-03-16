const WebSocket = require('ws');
// ws is a simple to use, blazing fast, and thoroughly tested WebSocket client and server implementation.
// The client in the docs is a reference to a back end with the role of a client in the WebSocket communication.

const wss = new WebSocket.Server({ port: 3000 });

// sends data back to all the clients
wss.on('connection', function connection(ws) {
  wss.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== wss && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});
