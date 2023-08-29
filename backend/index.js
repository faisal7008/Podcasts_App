const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("MongoDB is Connected...");
        // Start server
        app.listen(process.env.PORT || 9000, () =>
          console.log(`Server started on ${process.env.PORT || 9000}`)
        );
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

const userRouter = require("./routes/userRoutes");
const podcastRouter = require("./routes/podcastRoutes");
const episodeRouter = require("./routes/episodeRoutes");
const playbackRouter = require("./routes/playbackRoutes");

// Routes
app.use("/users", userRouter);
app.use("/podcasts", podcastRouter);
app.use("/episodes", episodeRouter);
app.use("/playbacks", playbackRouter);
