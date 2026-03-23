const mongoose = require("mongoose")
const foodModel = new mongoose.Schema({
    food_name : {
        type : String,
        required:true
    },
    food_type : {
        type : String,
        enum : ['veg','non-veg'],
        required : true
    },
    meal_service : {
        type : String , 
        enum : ['break_fast','lunch','dinner'],
        required: true
    },
    menu_type : {
        type : String,
        enum : ['starter','main_course','dessert'],
        requried: true
    },
    restaurant : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'restaurants'
    }
})
module.exports = mongoose.model("food_item",foodModel); 