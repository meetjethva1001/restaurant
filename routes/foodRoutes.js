const router = require("express").Router()
const {addFoodItem,getFoods,getFoodByUserId} = require("../controllers/foodController")
const {isLoggedIn} = require("../middlewares/isLoggedIn")
const {authorizeUser} = require("../utils/rbac")

router.post("/add-item" , addFoodItem);

router.get("/foods" , isLoggedIn , getFoods)

router.get("/user-foods/:id",  isLoggedIn,authorizeUser ,getFoodByUserId)

module.exports = router