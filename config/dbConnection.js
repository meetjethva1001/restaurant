const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.info(`Database connection success`))
.catch((err) => console.error(`Error occured while connecting database`))

module.exports = mongoose.connection;