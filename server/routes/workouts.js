import express from "express";
import Workout from "../models/workoutModel.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        mssg: "GET all workouts"
    });
});

router.post("/", async (req, res) => {
    const {title, load, reps} = req.body;

    try {
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get("/:id", (req, res) => {
    res.json({
        mssg: "GET workout: "
    });
});

router.delete("/:id", (req, res) => {
    res.json({
        mssg: "DELETE workout: "
    });
});

router.patch("/:id", (req, res) => {
    res.json({
        mssg: "patch workout: "
    });
});


export default router;