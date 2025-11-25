const mongoose= require('mongoose');
const collectionSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    userid:{
        type:String,
        required:true
    },
    partyName:{
        type:String,
        required:true
    },
    collectionAmount:{
        type:Number,
        required:true
    },
    
    createdOn:{
        type:Date,
        default:Date.now()
    }
})
module.exports= mongoose.model("Collection", collectionSchema);