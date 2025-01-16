require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutRoutes");

const app = express();

<<<<<<< HEAD
// Enable CORS for your frontend domain
app.use(cors());

=======
>>>>>>> 5915d032fa62b6e543c0d1711633aa0c90b8a648
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
