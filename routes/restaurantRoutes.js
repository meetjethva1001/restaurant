const router = require("express").Router()
const {addRestaurant,averageRatings,showFoodItems, updateRest,
     deleteRest, findByRegex, findByUserId} = require("../controllers/restaurantController")

const {authorizeUser}= require("../utils/rbac")
const {isLoggedIn} = require("../middlewares/isLoggedIn")

router.post("/add-rest" , authorizeUser ,addRestaurant)

router.get("/avg-rating" , averageRatings);

router.get("/rest-foods",showFoodItems)

router.put("/update-rest/:id" , updateRest)

router.delete("/delete-rest/:id" , deleteRest);

router.get("/find-i" , findByRegex)

router.get("/user-rest/:id" , isLoggedIn,authorizeUser , findByUserId)

module.exports = router;