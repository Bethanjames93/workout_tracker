const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Exercise type: Cardio or Resistance?"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Exercise name"
                },
                duration: {
                    type: Number,
                    required: "Workout duration"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    
    })

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;