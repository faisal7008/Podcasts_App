const mongoose = require("mongoose");

const playbackSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  podcast: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Podcast",
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  },
});

const Playback = mongoose.model("Playback", playbackSchema);

module.exports = Playback;
