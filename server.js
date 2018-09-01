const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const questions = require('./app/public/data/questions');
// const files = require('./public/data/File');
// const router = require('./public/data/routes');
// const user = require('./public/data/user');
const config = require('./app/config/database');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5050");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// require('./config/passport');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('cookie-parser')('hack'));
app.use(require('express-session')({
    secret: 'hack',
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', questions);
// app.use('/', files);
// app.use('/', user);
// app.use(router);

const port = 5002;
app.listen(port, () => {
    console.log('Server started on port ' + port);
})

// mongoose.connect(config.local, { useMongoClient: true }, (err, database) => {
//     if (err) console.log(err.message)
//     else {
//         console.log('Server is Connected!')
//     }
// });



// module.exports = app;