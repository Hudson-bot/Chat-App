import jwt from "jsonwebtoken";
import User from "../user.models.js";

const protectRoute = async (req,res,next) =>{
    try{
        const token = req.cookies.jwt;
    if(!token){
        return res.status(401).json({error: "Unauthorized- No token Provided"});
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(!decoded){
        return res.status(401).json({error: "Unauthorized- Token Invalid "})
    }

    const user = await User.findById(decoded.userId).select("-password");

    if(!user){
        return res.status(401).json({error: "Unauthorized- User not found "});
    }

    req.user = user

    next(); //after all this just called the next function to jump to next function
    }catch(error){
        console.log("Error in protectRoute middleware: ",error.message)
        res.status(500).json({error:"Internal server error"});
    }
}

export default protectRoute;