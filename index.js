require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app=express();
app.use(cors());
app.use(express.json());
const db='mongodb+srv://prrawat527:prrawat527@cluster0.ty8yp.mongodb.net/eduversity?retryWrites=true&w=majority';
const port = process.env.PORT || 3001;
mongoose.connect(db).then(() =>app.listen(port)).catch((err)=>console.log(err));
app.use("/", require("./routes/StudentRoute.js"));
app.use("/", require("./routes/FacultyRoute.js"));
app.use("/", require("./routes/classroutes/CERoute.js"));
app.use("/", require("./routes/classroutes/ECERoute.js"));
app.use("/", require("./routes/classroutes/EERoute.js"));
app.use("/", require("./routes/classroutes/CHERoute.js"));
app.use("/", require("./routes/classroutes/CSERoute.js"));
app.use("/", require("./routes/classroutes/MERoute.js"));
app.use("/", require("./routes/NotesRoute.js"));

