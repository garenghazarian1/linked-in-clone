import express from "express";
import { handleLogin, handleRegister } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/register", handleRegister);
userRoutes.post("/login", handleLogin);

export default userRoutes;