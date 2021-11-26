const express = require("express");
const router = express.Router();
const NotesModel = require("../models/Notes");

router.route("/notes").post((req,res) => {
    const Notes = new NotesModel({
        name: req.body.name,
        notes: req.body.notes
    }); 
    Notes.save().then((result)=>res.send(result)).catch((err) => console.log(err));
})
router.route("/notes").get((req,res) => {
    NotesModel.find().then(notes =>res.json(notes));
})
router.route("/notes/:id").delete((req,res) => {
    NotesModel.deleteOne({_id:req.params.id}).then((result) =>{res.status(200).json(result)}).catch((err)=>console.warn(err));
})
module.exports = router;