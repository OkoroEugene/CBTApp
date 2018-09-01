const express = require('express');
const app = express();
var session = require('express-session');
var cookieParser = require('cookie-parser');

app.use(cookieParser('secret'));
app.set('trust proxy', 1) // trust first proxy
var session = require("express-session")({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 24 * 60 * 60 * 1000 },
});
app.use(session);
module.exports = session;




