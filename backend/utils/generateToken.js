//jwt is digital signature.created token and set it to cookie to make it bit secure.
import jwt from "jsonwebtoken";


//created token method by calling sign method and send a payload.
const generateTokenAndSetCookie = (userId ,res) =>{
const token = jwt.sign({userId},process.env.JWT_SECRET,{
    expiresIn: '15d'
})

res.cookie("jwt",token,{
    maxAge: 15 * 24 * 60 * 60 * 1000 ,
    httpOnly: true, //prevent XSS attacks cross-site scripting attacks
    sameSize:"strict",//CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development"
});
};

export default generateTokenAndSetCookie;