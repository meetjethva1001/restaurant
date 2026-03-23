const {addUser, login} = require("../controllers/userController")
const router = require("express").Router()

router.get("/" , (req,res)=> console.log("hey from server"))

router.post("/add-user" , addUser)

router.post("/login-user" , login);

module.exports = router;