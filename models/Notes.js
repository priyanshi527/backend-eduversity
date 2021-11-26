const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  NotesSchema = Schema({
    name: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
},{timestamps: true});

const NotesModel = mongoose.model('NotesModel', NotesSchema);
module.exports = NotesModel;
