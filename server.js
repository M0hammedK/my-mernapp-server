require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workoutRoutes");

const app = express();

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
    useUnifiedTopology: true, // Ensures compatibility with the MongoDB driver
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server only after a successful database connection
    const PORT = process.env.PORT || 4000; // Default to 4000 for local testing
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1); // Exit the application on database connection failure
  });
