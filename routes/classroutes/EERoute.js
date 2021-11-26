const express = require("express");
const router = express.Router();
const ClassModel = require("../../models/Classesmodel");
const EEClassModel=ClassModel.EEClassModel;

router.route("/classes/ee").post((req,res) => {
    const classes = new EEClassModel({
        subject: req.body.subject,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        classCapacity: req.body.classCapacity,
    }); 
    classes.save().then((result)=>res.send(result)).catch((err) => console.log(err));
})
router.route("/classes/ee").get((req,res) => {
    EEClassModel.find().then(classesdetails =>res.json(classesdetails));
})
router.route("/classes/ee/:id").delete((req,res) => {
    EEClassModel.deleteOne({_id:req.params.id}).then((result) =>{res.status(200).json(result)}).catch((err)=>console.warn(err));
})

module.exports = router;
