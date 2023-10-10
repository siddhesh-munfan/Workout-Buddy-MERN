const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController");

const router = express.Router();

// get all workouts
router.get("/", getWorkouts);

// get single workout
router.get("/:id", getWorkout);

// post new workout
router.post("/", createWorkout);

// delete workout
router.delete("/:id", deleteWorkout);

// update workout
router.patch("/:id", updateWorkout);

module.exports = router;
