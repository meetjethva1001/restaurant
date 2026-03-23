const router = require("express").Router()
const {addRestaurant,averageRatings,showFoodItems, updateRest, deleteRest, findByRegex} = require("../controllers/restaurantController")
const {authorizeUser}= require("../utils/rbac")

router.post("/add-rest" , authorizeUser ,addRestaurant)

router.get("/avg-rating" , averageRatings);

router.get("/rest-foods",showFoodItems)

router.put("/update-rest/:id" , updateRest)

router.delete("/delete-rest/:id" , deleteRest);

router.get("/find-i" , findByRegex)

module.exports = router;