const mongoose = require("mongoose");
const restaurantModel = require ("../models/restaurantModel")
const {asyncHandler} = require("../utils/asyncHandler")

const addRestaurant = asyncHandler(async(req,res) =>{
    if(!req.body.restaurant_name || !req.body.ratings || !req.body.address || !req.body.registerDate) {
        return res.status(400).json({msg : "All field required!!"})
    }
    else {
        await restaurantModel.create(req.body);
        res.status(201).json({msg : "restaurant added"})
    }
})

const averageRatings = asyncHandler(async(req,res) =>{
    const avgRating = await restaurantModel.aggregate([
        {
            $group : {
                _id:0,
                avgRatings : {$avg : "$ratings"}
            }
        }
    ])
    res.status(200).json({msg : "data fetched!!" , data : avgRating});
})

const showFoodItems = asyncHandler(async(req,res) =>{
    const restFoods = await restaurantModel.aggregate([
        {
            $lookup  : {
                from : "food_items",
                localField : "_id",
                foreignField : "restaurant",
                as : "result"
            }
        },
            {$unwind : "$result"},
        {
            $project : {
                _id : 0,
                restaurant_name:1,
                foodName : "$result.food_name",
                foodType : "$result.food_type",
                menuType : "$result.menu_type",
                meal_service : "$result.meal_service"
            }
        }
    ])
    res.status(200).json({msg : "data fetch" ,data : restFoods})
})

const updateRest = asyncHandler(async (req,res)=>{
    await restaurantModel.findByIdAndUpdate(req.params.id, {$set : req.body})
    res.status(200).json({msg : "restaurant updated.."})
})

const deleteRest = asyncHandler(async (req,res) =>{
    await restaurantModel.findByIdAndDelete(req.params.id);
    res.status(200).json({msg : "restaurant deleted suceess.."})
})

const findByRegex = asyncHandler(async (req,res) =>{
    const data = await restaurantModel.find({ restaurant_name : { $regex : "i$" , $options : "i" } })
    res.status(200).json({msg : "restaurant find!!" , data : data})
})

const findByUserId = asyncHandler(async (req,res) =>{
    const response = await restaurantModel.find({user : req.params.id});
    if(response.length <= 0) return res.status(200).json({msg:"restaurant not found for you!! , please add restaurants.."})
    // console.log(response.user)
    res.status(200).json({msg : "restaurant find!!" , data : response})
})

module.exports = {addRestaurant ,averageRatings,showFoodItems, updateRest, deleteRest, findByRegex, findByUserId} 