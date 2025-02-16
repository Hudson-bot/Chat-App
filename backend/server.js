import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connecToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 6000;

dotenv.config();
app.use(express.json());// to parse the incoming request body in json format(from req.body)

app.use(cookieParser());//middleware for accesing the cookies
app.use("/api/auth",authRoutes);//authroutes will direct to auth.routes.js(middleware)
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/",(req,res)=>{
//     res.send("Hello World!!");
// });




app.listen(PORT, () => {
    connecToMongoDB();
    console.log(`Server is listening on port ${PORT}`)
});
    