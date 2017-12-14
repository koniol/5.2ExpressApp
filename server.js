var express = require("express");
var fs = require("fs");
var app = express();

app.use(express.static("assets"));

var server = app.listen(4000, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});

app.get('/', function (req, res) {
    res.sendFile('/index.html')
});

app.get('/userform', function (req, res) {
    const response = {
        usr_name: req.query.first_name,
        las_name: req.query.last_name,
    };
    res.end(JSON.stringify(response));

});

