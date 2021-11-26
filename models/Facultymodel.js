const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const  FacultySchema = Schema({
    username: {
        type: String,
        required: true
    },
    FId: {
        type: String,
        unique: true,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Vaccination: {
        type: String,
        required: true
    },
    Department: {
        type: String,
        required: true
    }
},{timestamps: true});
const FacultyModel = mongoose.model('FacultyModel', FacultySchema);
module.exports = FacultyModel; 