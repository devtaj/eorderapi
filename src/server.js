const express= require('express');
const app=express();
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const mongoDbPath= "mongodb+srv://officialdev:devtajpuriya@cluster0.byner.mongodb.net/eorder";
mongoose.connect(mongoDbPath).then(function(){
const noteRouter= require("./routes/routes")
app.use("/dashboard", noteRouter);
})

const PORT= process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log("server is running on port "+ PORT);
});