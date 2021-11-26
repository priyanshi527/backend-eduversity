const express = require("express");
const router = express.Router();
const StudentModel = require("../models/Studentmodel");
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');

router.route("/student").post((req,res) => {
    const student = new StudentModel({
        username: req.body.username,
        Rollno: req.body.Rollno,
        Password: bcrypt.hashSync(req.body.Password, 10),
        Vaccination: req.body.Vaccination,
        Department: req.body.Department
    }); 
    student.save().then((result)=>res.send(result)).catch((err) => console.log(err));
})
router.route("/student-login").post((req,res) =>{
    const JWT_SECRET="okjhggnbbmhhggfs36@#$!%fjlkllmjngdxcbnmhuhyfffrd";
    const {Rollno, Password } = req.body;
    StudentModel.findOne({Rollno:Rollno}).then(user => {
    if(!user){
        res.json({status: 'error',error:"Invalid Rollno/Password"});
    }
    else{
        bcrypt.compare(Password, user.Password, function(err, result){
            if(result){
                const token = jwt.sign({Rollno:user.Rollno},JWT_SECRET);
                return res.json({status: 'ok', data: token});
            }
            else{
                return res.json({status: 'error',error:"Invalid Rollno/Password"});
            }
        })
    }
    })
})


module.exports = router;