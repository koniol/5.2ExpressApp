var express = require("express");
var fs = require("fs");
var app = express();

// Dołączenie folderu assets
// app.use(express.static("assets"));

var server = app.listen(4000, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});

app.use('/store', function(req, res, next){
    console.log('Hej, jestem pośrednikiem między żądaniem a odpowiedzią!');
    next();
});

app.get("/store", function (req, res) {
    console.log("Dostałem się do sklepu");
    res.send("To jest sklep");
});

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/userform', function (req, res) {
    const response = {
        usr_name: req.query.first_name,
        las_name: req.query.last_name,
    };
    res.end(JSON.stringify(response));

});

