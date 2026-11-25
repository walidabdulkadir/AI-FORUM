import express from "express";
import { registerController } from "../controller/auth.controller.js";
import { registerValidation } from "../validation/auth.validation.js";

export const authRouter = express.Router();

/**
 * @route POST /api/auth/login
 * @desc Authenticate user and get token
 * @access Public
 */
router.post('/login', loginValidation, loginController);
authRouter.post("/register", registerValidation, registerController);
