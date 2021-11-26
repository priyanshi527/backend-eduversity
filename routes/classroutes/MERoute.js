const express = require("express");
const router = express.Router();
const ClassModel = require("../../models/Classesmodel");
const MEClassModel=ClassModel.MEClassModel;
router.route("/classes/me").post((req,res) => {
    const classes = new MEClassModel({
        subject: req.body.subject,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        classCapacity: req.body.classCapacity,
    }); 
    classes.save().then((result)=>res.send(result)).catch((err) => console.log(err));
})
router.route("/classes/me").get((req,res) => {
    MEClassModel.find().then(classesdetails =>res.json(classesdetails));
})
router.route("/classes/me/:id").delete((req,res) => {
    MEClassModel.deleteOne({_id:req.params.id}).then((result) =>{res.status(200).json(result)}).catch((err)=>console.warn(err));
})

module.exports = router;