const Episode = require("../models/Episode");
const Podcast = require("../models/Podcast");
const User = require("../models/User");

// @desc    get all podcasts
// @route   GET /podcasts
// @access  Private

const getAllPodcasts = async (req, res) => {
  try {
    const podcasts = await Podcast.find();
    res.json(podcasts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    get podcasts by addedBy
// @route   GET /podcasts/:addedBy
// @access  Private

const getMyPodcasts = async (req, res) => {
  try {
    const podcasts = await Podcast.find({ addedBy: req.user.userId });
    res.json(podcasts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    get podcasts by speaker
// @route   GET /podcasts/:speaker
// @access  Private

const getPodcastsSpeaker = async (req, res) => {
  try {
    const podcasts = await Podcast.find({ speaker: req.params.speaker });
    res.json(podcasts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    get podcasts by id
// @route   GET /podcasts/:id
// @access  Private

const getPodcast = async (req, res) => {
  try {
    const podcast = await Podcast.findById(req.params.id);
    res.json(podcast);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    add a podcast
// @route   POST /podcasts
// @access  Private

const addPodcast = async (req, res) => {
  const { name, description, category, type, speaker, imageUrl } =
    req.body;
  try {
    // Check if the user entered all the details
    if (!name || !description || !category || !type || !speaker) {
      return res
        .status(401)
        .json({ message: "Please fill the necessary details" });
    }

    const newPodcast = new Podcast({
      name,
      description,
      category,
      type,
      speaker,
      imageUrl,
      addedBy: req.user.userId,
    });
    await newPodcast.save();

    // Update the episodes array in the corresponding podcast
    await User.findByIdAndUpdate(req.user.userId, {
      $push: { podcasts: newPodcast._id },
    });

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

    // Find the podcast to get the list of episode IDs
    const deletedPodcast = await Podcast.findByIdAndDelete(podcastId);
    if (!deletedPodcast) {
      return res.status(404).json({ message: "Podcast not found" });
    }

    // Update the episodes array in the corresponding podcast
    await User.findByIdAndUpdate(req.user.userId, {
      $pull: { podcasts: deletePodcast._id },
    });

    // Delete associated episodes
    const deletedEpisodes = await Episode.deleteMany({ podcastId });

    res.json({
      status: "deleted",
      successMsg: `Deleted ${deletePodcast?.name}.`,
      id: podcastId
      // deletedPodcast,
      // deletedEpisodes,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// @desc    like podcast
// @route   POST /podcasts/:id/like
// @access  Private

const favouritePodcast = async (req, res) => {
  try {
    const userId = req.user.userId;
    const podcastId = req.params.id;

    // Find the user to check their favoritePodcasts array
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if podcastId is already in user's favoritePodcasts array
    const isPodcastFavorited = user.favoritePodcasts.includes(podcastId);

    if (isPodcastFavorited) {
      // Remove podcastId from the favoritePodcasts array
      await User.findByIdAndUpdate(
        userId,
        { $pull: { favoritePodcasts: podcastId } },
        { new: true }
      );
      res.json({ userId, podcastId, msg: "Removed from favourite list" });
    } else {
      // Add podcastId to the favoritePodcasts array
      await User.findByIdAndUpdate(
        userId,
        { $addToSet: { favoritePodcasts: podcastId } },
        { new: true }
      );
      res.json({ userId, podcastId, msg: "Added to favourite list" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


module.exports = {
  addPodcast,
  updatePodcast,
  deletePodcast,
  favouritePodcast,
  getAllPodcasts,
  getPodcast,
  getMyPodcasts,
  getPodcastsSpeaker,
};
