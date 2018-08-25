const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('./routes');

const app = express();
const server = http.createServer(app);

// view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

//logger
app.use(logger('combined'));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// cookie parser
app.use(cookieParser());

app.use('/', routes);
app.use(express.static(path.join(__dirname, './public')));

server.listen(3000);
server.on('listening', () => {
  console.log('Server initialized at 3000');
});