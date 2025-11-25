// define schema

const mongoose = require("mongoose");
const partieSchema= mongoose.Schema({
    id: {
        type:String,
        required:true,
        unique:true,
    },
    userid:{
        type:String,
        required:true
    },
    partiesName:{
        type:String,
        required:true,
    },
    partiesAddress:{
        type:String,
    },
    phoneNumber:{
        type:Number,
        
    },
    emailAddress:{
        type:String,
    },
    openingBalance:{
        type:Number,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
    

});
module.exports= mongoose.model("Parties", partieSchema);