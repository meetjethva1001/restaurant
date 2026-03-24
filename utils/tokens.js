const jwt = require("jsonwebtoken")

const generateAccessToken = (user) =>{
    let accessTokenPayLoad = {
        _id : user._id,
        email : user.email,
        role : user.role
    }
    const accessToken = jwt.sign(accessTokenPayLoad , process.env.ACCESS_TOKEN_SECRET , {expiresIn : '30m'});
    return accessToken;
}

const generateRefershToken = (user) =>{
    let refreshTokenPayLoad = {
        _id : user._id,
    }
    const refreshToken = jwt.sign(refreshTokenPayLoad , process.env.REFRESH_TOKEN_SECRET , {expiresIn : '7d'});
    return refreshToken;
}

const verifyToken = (token) =>{
    const decodeToken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET);
    return decodeToken;
}

module.exports = {generateAccessToken , generateRefershToken, verifyToken};