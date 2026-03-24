const userModel = require("../models/userModel")
const { asyncHandler } = require("../utils/asyncHandler")
const bcrypt = require("bcrypt")
const { generateAccessToken, generateRefershToken } = require("../utils/tokens")

const addUser = asyncHandler(async (req, res) => {
    let {first_name,last_name,username ,address , email,password,status} = req.body;
    if(!first_name || !last_name || !username || !address || !email || !password || !status) return res.status(400).json({msg:"All field Required!!"})
        
    await userModel.create(req.body);
    res.status(201).json({ msg: 'user Created..' })
})

const login = asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const userExists = await userModel.findOne({ $or : [ {username} , {email} ] })

    if (!userExists) return res.status(409).json({ msg: "User does't Exists.." })

    const isMatch = await bcrypt.compare(password, userExists.password);
    if (!isMatch) return res.status(401).json({ msg: "Invalid Credentials" });

    //Generates user accessToken..
    const accessToken = generateAccessToken(userExists);    
    //Store token in cookies
    res.cookie("accessToken", accessToken, { secure: false, httpOnly: true });

    //Generates user refreshToken..
    const refreshToken = generateRefershToken(userExists);
    //Store token in cookies
    res.cookie("refreshToken", refreshToken, { secure: false, httpOnly: true });
    
    res.status(200).json({ msg : "User Login" , data : userExists._id})
})

module.exports = { addUser, login }
