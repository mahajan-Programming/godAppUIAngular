const express = require('express');

const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/employee-management'));

app.get('/*', function(req,res) {res.sendFile(__dirname + '/dist/employee-management/index.html');
});

app.listen(process.env.PORT || 8080);