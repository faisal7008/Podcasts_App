const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  podcastId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Podcast",
    required: true,
  },
  mediaUrl: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String
  }
}, {timestamps: true});

const Episode = mongoose.model("Episode", episodeSchema);

module.exports = Episode;
