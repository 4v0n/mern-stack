import express from "express";
import dotenv from "dotenv";

dotenv.config();

// express app
const app = express();

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
	next();
});

app.get("/", (req, res) => {
	res.json({mssg:"welcome to my app"});
});

// port
app.listen(process.env.PORT, () => {
	console.log("listening on port ", process.env.PORT);
});
