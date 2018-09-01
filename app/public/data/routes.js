const express = require('express');
const router = express.Router();

// app.use('/', indexRoute);
// app.use('/', Images);

const indexCtrl = require('./index');
const imageCtrl = require('./File');

// router.get('/category', indexCtrl.getCategory);
// router.post('/addImage', upload.single('file'), imageCtrl.addImage);
module.exports = router;