const mongoose = require("mongoose")
const restaurantSchema = new mongoose.Schema({
    restaurant_name : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    ratings : {
        type : Number,
        required : true
    },
    registerDate : {
        type : Date,
        required : true
    },
}, {timestamps : true})

module.exports = mongoose.model("restaurant" , restaurantSchema);