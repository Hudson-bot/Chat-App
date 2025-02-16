import User from "../models/user.models.js";

export const getUsersForSidebar = async (req,res) =>{
    try {

        const loggedInUserId = req.user._id;

        //will not show the loggin profile because we dont want to send message to ourselvws without password
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUserForSidebar: ",error.message)
    res.status(500).json({error:"Internal server error"});
    }
}