import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    },
//createdAt,updateAt => message.createdAt : 15:30
//for time in which the message is sent or recieved in frontend
},{timestamps:true});

const Message = mongoose.model("Message", messageSchema);
export default Message;