require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors
const workoutRoutes = require("./routes/workoutRoutes");

const app = express();

// Enable CORS for your frontend domain
app.use(
  cors({
    origin: ["https://workout-buddy-ledr76rj0-m0hammedks-projects.vercel.app"], // Replace with your actual frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    credentials: true, // Enable cookies if needed
  })
);

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Middleware to parse JSON
app.use(express.json());

// Define API routes
app.use("/api/workouts", workoutRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONG_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });
