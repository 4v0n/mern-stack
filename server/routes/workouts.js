import express from "express";
import { getWorkouts, getWorkout ,createWorkout, deleteWorkout, updateWorkout } from "../controllers/workoutController.js";

const router = express.Router();

router.get("/", getWorkouts);

router.post("/", createWorkout);

router.get("/:id", getWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

export default router;
