import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connecToMongoDB from "./db/connectToMongoDB.js";

import { app, server } from "./socket/socket.js";
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());// to parse the incoming request body in json format(from req.body)


app.use(cors({
    origin: "http://localhost:3000",  // Allow frontend
    methods: ["GET", "POST", "PUT", "DELETE"],  // Allowed methods
    credentials: true  // If using cookies/auth
  }));
app.use(cookieParser());//middleware for accesing the cookies
app.use("/api/auth",authRoutes);//authroutes will direct to auth.routes.js(middleware)
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/",(req,res)=>{
//     res.send("Hello World!!");
// });




server.listen(PORT, () => {
    connecToMongoDB();
    console.log(`Server is listening on port ${PORT}`)
});
    