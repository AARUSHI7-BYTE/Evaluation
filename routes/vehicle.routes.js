import express from "express";
import { addvehicle,assigndriver,getvehicle } from "../controllers/vehicle.controller";
import limiter from "../middleware/ratelimiter.middleware";
const router = express.Router();
router.post("/add",limiter,addvehicle);
router.patch("/assign-driver/:vehicleid",assigndriver);
router.get("/:vehicleid",getvehicle);
export default router;

