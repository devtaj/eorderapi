const mongoose= require('mongoose');


const inventorySchema= new mongoose.Schema({
    id:{
        type: String,
       unique: true,
        required: true
    },
    userid:{
        type:String,
        required:true,

    },
    itemName:{
        type:String,
        required:true,
    },
    itemQuantity:{
        type:Number,
        required:true
    },
    itemUnit:{
        type:String,
        required:true
    },
    itemPrice:{
        type:Number,
        
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})
module.exports= mongoose.model("Inventory", inventorySchema);


