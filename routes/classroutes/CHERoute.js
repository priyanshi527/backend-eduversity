const express = require("express");
const router = express.Router();
const ClassModel = require("../../models/Classesmodel");
const CHEClassModel=ClassModel.CHEClassModel;
router.route("/classes/che").post((req,res) => {
    const classes = new CHEClassModel({
        subject: req.body.subject,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        classCapacity: req.body.classCapacity,
    }); 
    classes.save().then((result)=>res.send(result)).catch((err) => console.log(err));
})
router.route("/classes/che").get((req,res) => {
    CHEClassModel.find().then(classesdetails =>res.json(classesdetails));
})
router.route("/classes/che/:id").delete((req,res) => {
    CHEClassModel.deleteOne({_id:req.params.id}).then((result) =>{res.status(200).json(result)}).catch((err)=>console.warn(err));
})

module.exports = router;