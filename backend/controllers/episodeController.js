const Episode = require("../models/Episode");
const Podcast = require("../models/Podcast");

// Create a new episode
const addEpisode = async (req, res) => {
  const { title, description, duration, podcastId, mediaUrl } = req.body;
  try {
    // Check if all required details are provided
    if (!title || !description || !duration || !podcastId || !mediaUrl) {
      return res.status(400).json({ message: "Please provide all details" });
    }

    const newEpisode = new Episode({
      title,
      description,
      duration,
      podcastId,
      mediaUrl,
    });

    const savedEpisode = await newEpisode.save();

    // Update the episodes array in the corresponding podcast
    await Podcast.findByIdAndUpdate(podcastId, {
      $push: { episodes: savedEpisode._id },
    });

    res.status(201).json(savedEpisode);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Server error" });
  }
};


// Get all episodes
const getAllEpisodesByPodcast = async (req, res) => {
  try {
    const episodes = await Episode.find({podcastId: req.params.podcastId});
    res.status(200).json(episodes);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get episode by ID
const getEpisode = async (req, res) => {
  try {
    const episode = await Episode.findById(req.params.id);
    if (!episode) {
      return res.status(404).json({ message: "Episode not found" });
    }
    res.status(200).json(episode);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update episode by ID
const updateEpisode = async (req, res) => {
  try {
    const updatedEpisode = await Episode.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedEpisode) {
      return res.status(404).json({ message: "Episode not found" });
    }
    res.status(200).json(updatedEpisode);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete episode by ID
const deleteEpisode = async (req, res) => {
  try {
    const deletedEpisode = await Episode.findByIdAndDelete(req.params.id);
    if (!deletedEpisode) {
      return res.status(404).json({ errorMsg: "Episode not found" });
    }
    res.status(200).json({successMsg: `Deleted ${deletedEpisode?.title}`, status: "deleted", id: req.params.id});
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addEpisode,
  getAllEpisodesByPodcast,
  getEpisode,
  updateEpisode,
  deleteEpisode,
};
