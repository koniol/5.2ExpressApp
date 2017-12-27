var express = require("express");
var fs = require("fs");
var app = express();

var stringifyFile;
stringifyFile = fs.readFile('plik.json', 'UTF-8', function (err, data) {
    stringifyFile = data;
});


app.get('/getNote', function (req, res) {
    res.send(stringifyFile);
});

app.post('/updateNote/:note', function (req, res) {
    var items = JSON.parse(stringifyFile);
   items.menu.popup.menuitem.push({value: 'New Button', onClick: req.params.note});
    res.send(stringifyFile);
    fs.writeFile("plik.json", JSON.stringify(items), function (err) {
        if (err) throw err;
        console.log("Write to file");
    });

});

app.delete('/del_user', function (req, res) {
    console.log('Otrzymałem żądanie DELETE do strony /del_user');
    res.send('Hello DELETE!');
});

app.get('/list_user', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony /list_user');
    res.send('Strona z listą użytkowników!');
});

app.get('/abc*get', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony /list_user');
    res.send('Strona z listą użytkowników!');
});

// app.get('/:id', function (req, res) {
//     console.log('Otrzymałem żądanie GET do strony /list_user');
//     res.send('Żadanie o id: ' + req.params.id);
// });

app.use(function (req, res, text) {
   res.status(500).send("Nie znalazłem żądanej strony ");
});


app.listen(4100);