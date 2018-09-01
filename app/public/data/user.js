const express = require('express');
const router = express.Router();
const passport = require('passport');
var userModel = require('../../entities/User');

router.post('/login', (req, res, next) => {
    passport.authenticate('local-sign-in', function (err, user, info) {
        if (err) { }
        if (!user) return res.json({ success: false, message: 'authentication failed' });
        req.logIn(user, loginErr => {
            if (loginErr) { res.json(0) }
            res.json(1);
        });
    })(req, res, next);
});

router.post('/register', (req, res) => {
    userModel.findOne({ username: req.body.username }, (err, user) => {
        if (!user) {
            userModel.create(req.body, (err, result) => {
                res.json(result);
            })
        }
        else
            res.json(0);
    })
})

router.get('/getUserName', (req, res) => {
    console.log(req.user);
    // userModel.findOne({ _id: req.user._id }, (err, user) => {
    //     res.json(user);
    // })
})

module.exports = router;