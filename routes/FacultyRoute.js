const express = require("express");
const router = express.Router();
const FacultyModel = require("../models/Facultymodel");
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');

router.route("/faculty").post((req,res) => {
    const faculty = new FacultyModel({
        username: req.body.username,
        FId: req.body.FId,
        Password: bcrypt.hashSync(req.body.Password,10),
        Vaccination: req.body.Vaccination,
        Department: req.body.Department
    }); 
    faculty.save().then((result)=>res.send(result)).catch((err) => console.log(err));
})

router.route("/faculty-login").post((req,res) =>{
    const JWT_SECRET="pohddbnbnkuiyr3569@1ghkjijbcds!!!yknl;'l,mbcsa";
    const {FId, Password } = req.body;
    FacultyModel.findOne({FId:FId}).then(user => {
    if(!user){
        res.json({status: 'error',error:"Invalid FId/Password"});
    }
    else{
        bcrypt.compare(Password, user.Password, function(err, result){
            if(result){
                const token = jwt.sign({FId:user.FId},JWT_SECRET);
                return res.json({status: 'ok', data: token});
            }
            else{
                return res.json({status: 'error',error:"Invalid FId/Password"});
            }
        })
    }
    })
})
module.exports = router;