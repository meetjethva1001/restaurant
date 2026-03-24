const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required:true
    },
    address : {
        type : String,
        required :true
    },
    email : {
        type :String,
        required:true
    },
    password :{
        type :String,
        requried: true
    },
    status : {
        type : String,
        enum : ['active','deactive'],
        required :true
    },
    role : {
        type :String,
        enum : ['owner','user'],
        required: true,
        default : "user"
    },
},{timestamps : true})

//For password Hashing (Using pre schema method)
userSchema.pre("save" , async function() {
    if(!this.isModified("password")) return;
    const hashPassword = await bcrypt.hash(this.password , 10);
    this.password = hashPassword;
})

module.exports = mongoose.model("users",userSchema)