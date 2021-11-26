const express = require("express");
const router = express.Router();
const ClassModel = require("../../models/Classesmodel");
const CSEClassModel=ClassModel.CSEClassModel;
router.route("/classes/cse").post((req,res) => {
    const classes = new CSEClassModel({
        subject: req.body.subject,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        classCapacity: req.body.classCapacity,
    }); 
    classes.save().then((result)=>res.send(result)).catch((err) => console.log(err));
})
router.route("/classes/cse").get((req,res) => {
    CSEClassModel.find().then(classesdetails =>res.json(classesdetails));
})
router.route("/classes/cse/:id").delete((req,res) => {
    CSEClassModel.deleteOne({_id:req.params.id}).then((result) =>{res.status(200).json(result)}).catch((err)=>console.warn(err));
})

module.exports = router;