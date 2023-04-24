const Playback = require("../models/Playback");
const Podcast = require("../models/Podcast");

const addPlayback = async (req, res) => {
  const { podcastId, position } = req.body;
  const userId = req.user.userId;

  try {
    // Check if the podcast exists
    const podcast = await Podcast.findById(podcastId);
    if (!podcast) {
      return res.status(404).json({ message: "Podcast not found" });
    }

    // Create a new playback
    const playback = new Playback({
      userId,
      podcastId,
      position,
    });
    await playback.save();

    res.json({ message: "Playback created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const updatePlayback = async (req, res) => {
  const playbackId = req.params.id;
  const userId = req.user.userId;
  const { position } = req.body;

  try {
    // Check if the playback exists
    const playback = await Playback.findById(playbackId);
    if (!playback) {
      return res.status(404).json({ message: "Playback not found" });
    }

    // Check if the playback belongs to the authenticated user
    if (playback.userId !== userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Update the playback position
    playback.position = position;
    await playback.save();

    res.json({ message: "Playback updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const deletePlayback = async (req, res) => {
  const playbackId = req.params.id;
  const userId = req.user.userId;

  try {
    // Check if the playback exists
    const playback = await Playback.findById(playbackId);
    if (!playback) {
      return res.status(404).json({ message: "Playback not found" });
    }

    // Check if the playback belongs to the authenticated user
    if (playback.userId !== userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Delete the playback
    await Playback.findByIdAndDelete(playbackId);

    res.json({ message: "Playback deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addPlayback, updatePlayback, deletePlayback };
