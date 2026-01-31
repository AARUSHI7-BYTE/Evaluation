import express from "express";
import { createtrip,endtrip } from "../controllers/trip.controller";
const router = express.Router();
router.post("/", createtrip);
router.patch("/:id", endtrip);
export default router;