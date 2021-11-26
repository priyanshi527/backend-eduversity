const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const  StudentSchema = Schema({
    username: {
        type: String,
        required:true
    },
    Rollno: {
        type: String,
        unique: true,
        required:true
    },
    Password: {
        type: String,
        required:true
    },
    Vaccination: {
        type: String,
        required:true
    },
    Department: {
        type: String,
        required:true
    }
},{timestamps: true});

const StudentModel = mongoose.model('StudentModel', StudentSchema);
module.exports = StudentModel; 