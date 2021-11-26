const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const  ClassSchema = Schema({
    subject: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    classCapacity:{
        type: Number,
        required:true
    }
},{timestamps: true});

const CSEClassModel = mongoose.model('CSEClassModel', ClassSchema);
const CEClassModel = mongoose.model('CEClassModel', ClassSchema);
const ECEClassModel = mongoose.model('ECEClassModel', ClassSchema);
const EEClassModel = mongoose.model('EEClassModel', ClassSchema);
const CHEClassModel = mongoose.model('CHEClassModel', ClassSchema);
const MEClassModel = mongoose.model('MEClassModel', ClassSchema);
module.exports.CEClassModel = CEClassModel;
module.exports.CHEClassModel = CHEClassModel;
module.exports.CSEClassModel = CSEClassModel;
module.exports.EEClassModel = EEClassModel;
module.exports.ECEClassModel = ECEClassModel;
module.exports.MEClassModel = MEClassModel;
