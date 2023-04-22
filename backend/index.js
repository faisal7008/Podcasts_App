const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const podcastRouter = require("./routes/podcastRoutes");
const playbackRouter = require("./routes/playbackRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost/podcastsdb", {
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
app.listen(9000, () => console.log("Server started"));
