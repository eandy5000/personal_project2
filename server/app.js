var express = require('express');
var app = express();
var index = require('./routes/index');
var path = require('path');
var bodyParser =require('body-parser');

<<<<<<< HEAD
var passport = require('./strategies/facebook');
var session = require('express-session');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./public')));


app.use(session({
    secret: 'secret',
    key: 'user',
    resave: 'true',
    saveUninitialized: false,
    cookie: {maxage: 600000, secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());

=======
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./public')));
>>>>>>> ea5b2e115a9f55dd8465f82147d4a4cfda090156
app.use('/', index);

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("listening on port: ",port);
});

<<<<<<< HEAD
module.exports = app;
=======
module.exports=app;
>>>>>>> ea5b2e115a9f55dd8465f82147d4a4cfda090156
