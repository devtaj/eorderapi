const mongoose= require('mongoose');
const salesSchema= new mongoose.Schema({
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
        type:String,
        required:true
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
    customerName:{
        type:String,
        required:true
    },
    customerPhone:{
        type:String,
        
    },
    orderStatus:{
        type:String,
        default:"Pending"
    },
    
    totalPrice:{
        type:Number,
        required:true
    },
    salesDate:{
        type:Date,
        default:Date.now()
    }
})
module.exports= mongoose.model("Sales", salesSchema);