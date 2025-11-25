const mongoose= require('mongoose');
const orderSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    userid:{
        type:String,
        required:true,

    },
    partyName:{
        type:String,
        required:true,
    },
    partyAddress:{
        type:String,
        
    },
    orderDate:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    dispatchDate:{
        type:Date,
    },
    orderItems:{
        type:String,
        required:true
    },
    orderStatus:{
        type:String,
        default:"Pending"
    },
    orderDispatched:{
        type:Boolean,
        default:false
    },
    orderItemsUnit:{
        type:String,
        required:true
    },
   
    orderQuantity:{
        type:Number,
        required:true
    },
    orderAmount:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }


})
module.exports= mongoose.model("Order", orderSchema);