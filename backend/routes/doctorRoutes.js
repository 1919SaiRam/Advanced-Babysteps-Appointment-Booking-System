import express from "express";
import { getDoctors, getAvailableSlots } from "../controllers/doctorController.js";

const router = express.Router();

router.get("/", getDoctors);
router.get("/:id/slots", getAvailableSlots);

export default router;
