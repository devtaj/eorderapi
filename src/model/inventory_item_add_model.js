const mongoose= require('mongoose');
const addItemSchema= new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    userid:{
        type:String,
        required:true
    },
    itemName:{
        unique:true,
        type:String,
        required:true
    },
    itemUnit:{
        type:String,
        required:true
    },
    itemPrice:{
        type:Number,
       
    },
    addedOn:{
        type:Date,
        default:Date.now()
    }
})
module.exports= mongoose.model("AddItem", addItemSchema);