var express = require('express');
const app = express();
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var userModel = require('../entities/User');
var bcrypt = require('bcrypt-nodejs');

// app.use(passport.initialize());
// app.use(passport.session());

passport.serializeUser((user, done) => {
    console.log('Serialize');
    done(null, user.id)
})

passport.deserializeUser((userId, done) => {
    console.log('Deserialize');
    userModel.findById(userId, (error, user) => {
        if (error) return done(error, false)
        done(null, user)
    })
})

passport.use('local-sign-in', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},
    function (req, username, password, done) {
        userModel.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            bcrypt.compare(password, user.password, function (err, res) {
                if (res) {
                    // Passwords match
                    return done(null, user);
                } else {
                    // Passwords don't match
                    return done(null, false, { message: 'bad password' });
                }
            });
            // if (user.password != password) { return done(null, false, { message: 'bad password' }); }
            // console.log(user)
        });
    }
));

module.exports = passport;