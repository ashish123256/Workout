import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://c8.alamy.com/comp/2PWERD5/student-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-youth-avatar-vector-illustration-2PWERD5.jpg"
    },
},{timestamps: true});


const  User = mongoose.model("User",userSchema);
export default User;