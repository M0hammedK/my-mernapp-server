const express = require("express");
const Workout = require("../models/workoutModel");
const router = express.Router();
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout)

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
