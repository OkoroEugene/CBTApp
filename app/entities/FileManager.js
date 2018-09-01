const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var FileManagerSchema = new Schema({
    filename: { type: String, required: true },
    type: { type: String, required: true },
    date: Date,
})

var FileManagerModel = mongoose.model('FileManager', FileManagerSchema);
module.exports = FileManagerModel;