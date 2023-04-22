const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  podcasts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Podcast",
    },
  ],
  favoritePodcasts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Podcast",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
