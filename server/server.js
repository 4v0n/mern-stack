import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import workoutRoutes from "./routes/workouts.js";

dotenv.config();

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db

mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB, listening on port ", process.env.PORT);
        });
    })
    .then((error) => {
        console.log(error);
    });
