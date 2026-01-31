import express from "express";
import {signup} from "./controllers/user.controller.js";
const router=express.router();
router.post("/signup",signup);
export default router;