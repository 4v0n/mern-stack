import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        mssg: "GET all workouts"
    });
});

router.post("/", (req, res) => {
    res.json({
        mssg: "POST a new workout"
    });
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