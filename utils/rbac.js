const {verifyToken} = require("../utils/tokens")

const authorizeUser = (req,res,next) =>{
    const token = req.cookies.accessToken;
    if(!token) return res.status(403).json({msg :"Token expire or Currepted!!"})

    const decodeToken = verifyToken(token);
    if(decodeToken.role.toLowerCase() != 'owner') {
        return res.status(401).json({msg : "Unauthorize Access"})
    }
    next()
} 
module.exports = {authorizeUser}