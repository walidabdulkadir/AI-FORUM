import express from "express";
import { registerController } from "../controller/auth.controller.js";
import { registerValidation } from "../validation/auth.validation.js";

export const authRouter = express.Router();

authRouter.post("/register", registerValidation, registerController);