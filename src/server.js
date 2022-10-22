const express = require('express');
const path = require('path');
const pages = require('./pages.js');
const server = express();

server
.use(express.static('public'))

.set('views', path.join(__dirname,"views"))
.set('view engine', 'hbs')
.get('/', pages.index)
.get('/evento', pages.evento)
.get('/events', pages.events)
.get('/registro-evento', pages.registroEvento)

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Acesse http://localhost:3000');
});