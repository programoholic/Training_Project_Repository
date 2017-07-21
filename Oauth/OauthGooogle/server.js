


const express = require('express');
const app = express();
const port = process.env.PORT || 4200;

const cookieParser = require('cookie-parser');
const morgan = require('morgan');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash');
const controller = require('./app.controller');
require('./config/passport.js')(passport);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(session({secret: 'anystringoftext',
// 				 saveUninitialized: true,
// 				 resave: true}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// app.get('/auth/google/callback', 
// passport.authenticate('google', { successRedirect: '/profile',
// 	                                      failureRedirect: '/',
//                                           session: false }));
// app.use(function(req ,res,next)
// {
//     // To Write a Cookie
//   res.cookie('test' , 'something', {expire : new Date() + 9999});
//   next();
// });

app.get('/auth/google/callback', (req, res, next) => {

    generateToken(req, res, next).then((result) => {
        console.log("request is ===============", result);
        res.cookie('currentUser', result);
        res.redirect('/profile');

    }, err => {
        console.log("error is", err);
    });

});

let generateToken = function (req, res, next, cb) {
    let promise = new Promise((resolve, reject)=>{
        passport.authenticate('google', function (err, user, info) {
            if (err) {
                reject(err);
            }
            else {
                console.log("inside Google callback");
                console.log(user);
                resolve(user);
            }
        })(req, res, next);
    });
    return promise;
}


    app.listen(port);
    console.log("listrnoing on port", port);
