const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

import webpackDevServer from './webpack/dev-server';

const routes = require('./routes');

import searchResults from './api/searchResults'

const app = express();
if (process.env.NODE_ENV !== 'production') {
  webpackDevServer(app);
}
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
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/searchResults:id', (req, res) => {
  res.send(searchResults(req.params.id));
})

server.listen(3000);
server.on('listening', () => {
  console.log('Server initialized at 3000');
});