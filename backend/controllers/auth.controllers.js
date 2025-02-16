import bcryptjs from "bcryptjs";
import User from "../models/user.models.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";


//this is created because in auth.routes.js if every login and signup will hold res.send which is meshy so this is created.
export const signup = async (req, res) => {
    try{
        const {fullName,username,password,confirmPassword,gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords dont match"})
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error:"Username already exists"})
        }

        //Hash Password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        //https://avatar-placeholder.json.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girld?username=${username}`

        //create a new user.
        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender === "male"  ? boyProfilePic : girlProfilePic,
        });

        if(newUser){
            //Generate JWT token here.
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic:newUser.profilePic
        });
        }else{
            res.stauts(400).json({error:"Invalid user data"});
        }

    }catch(error){
        console.log("Error  in signup controller",error.message);
        res.status(500).json({error:"Internal server error"})
    }

};

export const login = async (req, res) => {
    try{
         const {username, password} = req.body;
         const user = await User.findOne({username});
         const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");//comparing password from user and password that is in database

         if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid Username or password"});
        }

        generateTokenAndSetCookie(user._id,res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic:user.profilePic,
        });
    }catch(error){
        console.log("Error  in login controller",error.message);
        res.status(500).json({error:"Internal server error"})
    }
   
};
export const logout = (req, res) => {
   try{
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({message:"Logged out successfully"});
   }catch(error){
    console.log("Error  in login controller",error.message);
    res.status(500).json({error:"Internal server error"})
   }
};
