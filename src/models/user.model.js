import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: True,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: True,
    }
})

export default mongoose.model("User", userSchema)