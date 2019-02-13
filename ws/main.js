var WebSocketServer = require('ws').Server;

const session = require('express-session');
const express = require('express');
const http = require('http');
const uuid = require('uuid');


const app = express();

//
// We need the same instance of the session parser in express and
// WebSocket server.
//
const sessionParser = session({
  saveUninitialized: false,
  secret: '$eCuRiTy',
  resave: false
});

//
// Serve static files from the 'public' folder.
//
app.use(express.static('public'));
app.use(sessionParser);

app.post('/login', (req, res) => {
    //
    // "Log in" user and set userId to session.
    //
    const id = uuid.v4();
  
    console.log(`Updating session for user ${id}`);
    req.session.userId = id;
    res.send({ result: 'OK', message: 'Session updated' });
  });
  
  app.delete('/logout', (request, response) => {
    console.log('Destroying session');
    request.session.destroy();
    response.send({ result: 'OK', message: 'Session destroyed' });
  });

  




  var wss = new WebSocketServer({
    port: 8080
  }),
  CLIENTS = [];


wss.getUniqueID = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4();
};

wss.on('connection', function (ws) {

    ws.id = wss.getUniqueID();

  CLIENTS.push(ws);
  debugger;
  ws.on('message', function (message) {
   
    console.log('received from ' + ws.id +': %s', message);
   // sendAll(message);
  });
  ws.send("NEW USER JOINED");
});

function sendAll(message) {
  for (var i = 0; i < CLIENTS.length; i++) {
    CLIENTS[i].send("Message: " + message);
  }
}
