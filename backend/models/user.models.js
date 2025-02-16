//in this we created different fields for different data types
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"] //used for choices
    },
    profilePic:{
        type:String,
        default:"",
    },

},
//createdAt,updateAt => message.createdAt : 15:30
//for time in which the message is sent or recieved in frontend
{timestamps:true});

const User = mongoose.model("User",userSchema);
export default User;


