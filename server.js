var express = require("express");
var fs = require("fs");
var app = express();

app.use(express.static("views/static"));

app.set('view engine', 'pug');
app.set('views','./views');
// Dołączenie folderu assets
// app.use(express.static("assets"));

app.get('/first-template', function(req, res){
    res.render('first-template',
        {
            name: "Paweł",
            age: 34
        });
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
    res.sendFile('./index');
});

app.get('/userform', function (req, res) {
    const response = {
        usr_name: req.query.first_name,
        las_name: req.query.last_name,
    };
    res.end(JSON.stringify(response));
});

app.get('/google/auth', function (req, res) {
    res.send("Imie: " + req.query.first_name);
});

var server = app.listen(4000, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});

