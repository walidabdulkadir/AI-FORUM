import express from "express";
import { authRouter } from "./auth/routes/auth.route.js";

export const mainRouter = express.Router();

//Auth routes
mainRouter.use("/auth", authRouter);
