const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["audio", "video"],
    required: true,
  },
  speaker: {
    type: String,
    required: true,
  },
  episodes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Episode",
  }],
  imageUrl: {
    type: String,
    // required: true,
  },
  // Reference to the user who added the podcast
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, {timestamps: true});

const Podcast = mongoose.model("Podcast", podcastSchema);

module.exports = Podcast;
