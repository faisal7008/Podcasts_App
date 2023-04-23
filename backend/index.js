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
mongoose.connect("mongodb://localhost/mypodcastsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

// Routes
app.use("/users", userRouter);
app.use("/podcasts", podcastRouter);
app.use("/playbacks", playbackRouter);

// Start server
app.listen(process.env.PORT || 9000, () => console.log("Server started"));
