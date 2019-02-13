var WebSocket = require('ws');

const session = require('express-session');
const express = require('express');
const http = require('http');
const uuid = require('uuid');
var cors = require('cors')
var bodyParser = require('body-parser');


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
app.use(express.static('test'));

app.use(sessionParser);

//app.use(bodyParser.urlencoded({ extended: false }));
var jsonParser = bodyParser.json()
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 ,
  credentials: true,
}

app.use(cors(corsOptions));
app.get('/home', (req, res) => {
  res.status(200);
  res.sendFile(__dirname + '/test/test.html')
});

app.post('/login', (req, res) => {
  //
  // "Log in" user and set userId to session.
  //
  console.log(req.body);
  const id = uuid.v4();
  const name = req.body && req.body.id ? req.body.id : undefined;
  if (!name) {
    res.status(401)
    res.send({
      status: '401',
      message: 'Invalid Credentials'
    });
    return false;
  }

  console.log(`Request session Id ${req.session.id}`);
  console.log(`Updating session for user ${id}`);
  req.session.userId = id;
  req.session.name = name;
  res.send({
    result: 'OK',
    message: 'Session updated'
  });
});

app.delete('/logout', (request, response) => {
  console.log('Destroying session');
  request.session.destroy();
  response.send({
    result: 'OK',
    message: 'Session destroyed'
  });
});

//
// Create HTTP server by ourselves.
//
const server = http.createServer(app);


const wss = new WebSocket.Server({
  verifyClient: (info, done) => {
    console.log('Parsing session from request...');
    sessionParser(info.req, {}, () => {
      console.log('Session is parsed!');
      console.log(`Request session Id ${info.req.session.id}`);
      //
      // We can reject the connection by returning false to done(). For example,
      // reject here if user is unknown.
      //
      done(info.req.session.userId);
    });
  },
  server
});

CLIENTS = [];


wss.getUniqueID = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4();
};

wss.on('connection', function (ws,req) {
  ws.id = req.session.name;
  CLIENTS[req.session.name] = ws;
  ws.on('message', function (message) {

    message = JSON.parse(message)
    console.log('received from ' + ws.id + ': %s', message);
    CLIENTS[message.to].send(JSON.stringify(message));

    // sendAll(message);
  });
  ws.send("NEW USER JOINED" + ws.id);
});

function sendAll(message) {
  for (var i = 0; i < CLIENTS.length; i++) {
    CLIENTS[i].send("Message: " + message);
  }
}

//
// Start the server.
//
server.listen(8080, () => console.log('Listening on http://localhost:8080'));
