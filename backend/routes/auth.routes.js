//for creating many routes we use different routes so we use middleware and created this file.
import express from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/signup",signup);//signup will direct to auth.controllers.js

router.post("/login",login);

router.post("/logout",logout);

export default router;