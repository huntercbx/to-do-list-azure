var http = require('http');
var express = require('express');
var path = require('path');
var swaggerUi = require('swaggerize-ui');
var app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/api-docs', function (request, response) {
    response.json(require('./api.json'));
});

app.use('/docs', swaggerUi({ docs: '/api-docs' }));

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/lists', function (request, response) {
    response.send('Get lists')
});

app.post('/lists', function (request, response) {
    response.send('Create list')
});

app.put('/lists', function (request, response) {
    response.send('Update list')
});

app.delete('/lists', function (request, response) {
    response.send('Delete list')
});

// start server
var port = process.env.PORT || 1337;
var server = http.createServer(app).listen(port);
console.log("Server running at http://localhost:%d", port);
