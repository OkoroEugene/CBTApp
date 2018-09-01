const express = require('express');
const router = express.Router();
const fileManagerModel = require('../../entities/FileManager');
const upload = require('../../config/multer');

router.post('/addImage', upload.single('file'), (req, res) => {
    let type = null;
    req.file.mimetype.includes('jpg') ? type = 'img' : null
    req.file.mimetype.includes('mp3') ? type = 'music' : null
    !req.file.mimetype.includes('jpg') && !req.file.mimetype.includes('mp3') ? type = 'other' : null
    let data = {
        filename: req.file.filename,
        type: type
    }

    fileManagerModel.create(data, (err, result) => {
        res.json(result)
    });
})

router.get('/getFile', function (req, res) {
    const { fileType } = req.query;
    fileManagerModel.find({ type: fileType }, function (err, data) {
        res.json(data);
    })
})

module.exports = router;