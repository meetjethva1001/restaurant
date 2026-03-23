const express = require('express')
const app =express()
require("dotenv").config()
const dbConnection = require("./config/dbConnection")
const userRoutes = require("./routes/userRoutes")
const foodRoutes = require("./routes/foodRoutes")
const restaurantRoutes = require("./routes/restaurantRoutes")
const cookieParser = require("cookie-parser")

app.use(cookieParser())
app.use(express.json()) 
app.use(userRoutes)
app.use(foodRoutes)
app.use(restaurantRoutes)

app.use((err,req,res,next) =>{
    let status = err.status || 500;
    let msg = err.message || 'internel server error';
    res.status(status).json({msg : msg});
})

app.listen(process.env.PORT , (req,res)=> console.log(`server started`));