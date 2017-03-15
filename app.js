
//app.js
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var taskRouter = require('./routes/tasks');
var port = 5000;

//middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/tasks', taskRouter);

app.listen(port, function() {
  console.log('listening on localhost: ', port);
});
