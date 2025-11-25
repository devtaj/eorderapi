const mongoose= require('mongoose');

const purchaseSchema= new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    userid:{
        type:String,
        
    },
    itemName:{
        type:String,
        
    },
    itemQuantity:{
        type:Number,
        
    },
    itemUnit:{
        type:String,
        
    },
    itemPrice:{
        type:Number,
        
    },
    totalPrice:{
        type:Number,
        
    },
    purchaseDate:{
        type:Date,
        default:Date.now()
    }
})
module.exports= mongoose.model("Purchase", purchaseSchema);