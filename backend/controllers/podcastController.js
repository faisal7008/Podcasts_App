const Podcast = require("../models/Podcast");

// @desc    add a podcast
// @route   POST /podcasts
// @access  Public

const addPodcast = async (req, res) => {
  try {
    const newPodcast = new Podcast(req.body);
    await newPodcast.save();
    res.status(201).json(newPodcast);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    update a podcast
// @route   POST /podcasts/:id
// @access  Private

const updatePodcast = async (req, res) => {
  try {
    const podcastId = req.params.id;
    const updatedPodcast = await Podcast.findByIdAndUpdate(
      podcastId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedPodcast) {
      return res.status(404).json({ message: "Podcast not found" });
    }
    res.json(updatedPodcast);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    delete a podcast
// @route   POST /podcasts/:id
// @access  Private

const deletePodcast = async (req, res) => {
  try {
    const podcastId = req.params.id;
    const deletedPodcast = await Podcast.findByIdAndDelete(podcastId);
    if (!deletedPodcast) {
      return res.status(404).json({ message: "Podcast not found" });
    }
    res.json(deletedPodcast);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    like podcast
// @route   POST /podcasts/:id/like
// @access  Private

const likePodcast = async (req, res) => {
  const podcastId = req.params.id;
  const userId = req.user.userId;

  try {
    // Check if the podcast exists
    const podcast = await Podcast.findById(podcastId);
    if (!podcast) {
      return res.status(404).json({ message: "Podcast not found" });
    }

    // Check if the user has already liked the podcast
    if (podcast.likes.includes(userId)) {
      return res
        .status(400)
        .json({ message: "You have already liked this podcast" });
    }

    // Add the user's ID to the podcast's list of likes
    podcast.likes.push(userId);
    await podcast.save();

    res.json({ message: "Podcast liked successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addPodcast, updatePodcast, deletePodcast, likePodcast };
