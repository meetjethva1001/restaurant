const foodModel = require("../models/foodModel")
const {asyncHandler} = require("../utils/asyncHandler")

const addFoodItem = asyncHandler(async(req,res) =>{
    await foodModel.create(req.body);
    res.status(201).json({msg : "food item created"});
})

const getFoods = asyncHandler(async(req,res)=>{
    const foods = await foodModel.find().limit(10)
    res.status(200).json({msg:"data fetch",data : foods})
})

const getFoodByUserId = asyncHandler(async(req,res) =>{
    const foods = await foodModel.find({restaurant : req.params.id});
    res.status(200).json({msg :"Food items find!!"})
})


module.exports = {addFoodItem,getFoods, getFoodByUserId}