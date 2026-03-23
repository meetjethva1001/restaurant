const router = require("express").Router()
const {addFoodItem,getFoods} = require("../controllers/foodController")
const {isLoggedIn} = require("../middlewares/isLoggedIn")

router.post("/add-item" , addFoodItem);

router.get("/foods" ,isLoggedIn , getFoods)

module.exports = router