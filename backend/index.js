const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const userRouter = require("./routes/userRoutes");
const podcastRouter = require("./routes/podcastRoutes");
const playbackRouter = require("./routes/playbackRoutes");

const app = express();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

// Routes
app.use("/users", userRouter);
app.use("/podcasts", podcastRouter);
app.use("/playbacks", playbackRouter);

// Start server
app.listen(process.env.PORT || 9000, () => console.log("Server started"));
