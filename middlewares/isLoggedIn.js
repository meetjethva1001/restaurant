const {verifyToken} = require("../utils/tokens")
const {asyncHandler} = require("../utils/asyncHandler")

const isLoggedIn = asyncHandler((req ,res, next) =>{
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json({msg : "Unauthorize"});
    try{
        const decodeToken = verifyToken(token);
        req.user = decodeToken;
        next()
    } catch(err){res.status(403).json({msg : "Token expires or currepted"})}
})
module.exports = {isLoggedIn}