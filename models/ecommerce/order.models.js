import mongoose from "mongoose" 

const orderItemSchema = new mongoose.Schema({
  productID : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Product",
  },
  quantity : {
    type : Number,
    requried : true ,
  }
})

const orderSchema = new mongoose.Schema(
  {
     name : {
      type : String,
      required : true,
    },

     orderItems : {
      type : [orderItemSchema],
    },

    orderPrice : {
      type : Number ,
      required : true,
    },
      customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
      },
      address : {
        type : String ,
        required : true, 
      },
      status : {
        type : String,
        enum  : ["PENDING","CANCELLED","DELIEVERED"],
        default : "PENDING"
      }
  },
    {
      timestamps: true
  }
  )
export const Order = mongoose.model("Order" , orderSchema)