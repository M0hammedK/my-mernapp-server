require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workoutRoutes");
const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use(express.json());
app.use("/api/workouts", workoutRoutes);


mongoose.connect(process.env.MONG_URL).then(()=>{
    console.log('mongo listening on port', process.env.PORT)
}).catch((err)=>{
    console.log(err)
})


app.listen(process.env.PORT, () => {
  console.log("server listening for port", process.env.PORT);
});
