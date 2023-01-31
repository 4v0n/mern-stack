import mongoose from "mongoose";

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true}); // automatically create a creation property when an object is created (has info like creation date)

// collection name is pluralised automatically
export default mongoose.model("workout", workoutSchema); // create a model using the schema