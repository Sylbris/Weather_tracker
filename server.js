const express = require('express')
const app = express()
const port = 3000
const http = require('http')
const socketIO = require('socket.io')
var controller = require('./controllers/dataUpdateController.js');
app.use(express.static('public'));


var server, io;
server = http.Server(app);
server.listen(port);

io = socketIO(server);


const router1 = require("./router.js");
app.set('view engine', 'ejs')

//Create Express Router
const router = express.Router();
app.use(router);
router1(app, router);

//Define what happens when you connect to socket.
io.on('connection', controller.updateWeather);