const express = require("express");
const router = express.Router();
const ClassModel = require("../../models/Classesmodel");
const CEClassModel=ClassModel.CEClassModel;
router.route("/classes/ce").post((req,res) => {
    const classes = new CEClassModel({
        subject: req.body.subject,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        classCapacity: req.body.classCapacity,
    }); 
    classes.save().then((result)=>res.send(result)).catch((err) => console.log(err));
})
router.route("/classes/ce").get((req,res) => {
    CEClassModel.find().then(classesdetails =>res.json(classesdetails));
})
router.route("/classes/ce/:id").delete((req,res) => {
    CEClassModel.deleteOne({_id:req.params.id}).then((result) =>{res.status(200).json(result)}).catch((err)=>console.warn(err));
})

module.exports = router;