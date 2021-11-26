const express = require("express");
const router = express.Router();
const ClassModel = require("../../models/Classesmodel");
const ECEClassModel = ClassModel.ECEClassModel;

router.route("/classes/ece").post((req,res) => {
    const classes = new ECEClassModel({
        subject: req.body.subject,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        classCapacity: req.body.classCapacity,
    }); 
    classes.save().then((result)=>res.send(result)).catch((err) => console.log(err));
})
router.route("/classes/ece").get((req,res) => {
    ECEClassModel.find().then(classesdetails =>res.json(classesdetails));
})
router.route("/classes/ece/:id").delete((req,res) => {
    ECEClassModel.deleteOne({_id:req.params.id}).then((result) =>{res.status(200).json(result)}).catch((err)=>console.warn(err));
})

module.exports = router;