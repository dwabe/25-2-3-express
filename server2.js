var express = require('express');
var app = express();

app.get('/:id', function (req, res) {
    res.send('Identyfikator, który został dopisany to ' + req.params.id);
});

app.listen(3000);