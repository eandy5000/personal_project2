var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');

<<<<<<< HEAD


var passport = require('../strategies/facebook');

// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
router.get('/auth/facebook', passport.authenticate('facebook', {scope : 'email'}));

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect : '/',
        failureRedirect : '/'
    }));

// route for logging out
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});



=======
>>>>>>> ea5b2e115a9f55dd8465f82147d4a4cfda090156
mongoose.connect('mongodb://localhost/tic_chat');

var Cat = mongoose.model('Cat', {name:String});


router.post('/add', function(req, res, next){
    var kitty = new Cat({name:req.body.name});
    kitty.save(function(err){
        if(err) console.log(err);
        res.send(kitty.toJSON());
        next();
    });
});

router.get('/cats', function(request, response, next){
    return Cat.find({}).exec(function(err, cats){
        if(err) throw new Error(err);
        response.send(JSON.stringify(cats));
        next();
    });
});

router.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname, "../public/views/index.html"));
});

module.exports = router;