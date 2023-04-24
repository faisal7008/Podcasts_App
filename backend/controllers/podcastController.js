const Podcast = require("../models/Podcast");

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

const getPodcastsAddedBy = async (req, res) => {
  try {
    const podcasts = await Podcast.find({ addedBy: req.params.addedBy });
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
    const podcast = await Podcast.find({ id: req.params.id });
    res.json(podcast);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    add a podcast
// @route   POST /podcasts
// @access  Public

const addPodcast = async (req, res) => {
  const { name, description, category, type, speaker, fileUrl, imageUrl } =
    req.body;
  try {
    // Check if the user entered all the details
    if (!name || !description || !category || !type || !speaker || !fileUrl) {
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
      fileUrl,
      imageUrl,
      addedBy: req.user.userId,
    });
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

// const likePodcast = async (req, res) => {
//   const podcastId = req.params.id;
//   const userId = req.user.userId;

//   try {
//     // Check if the podcast exists
//     const podcast = await Podcast.findById(podcastId);
//     if (!podcast) {
//       return res.status(404).json({ message: "Podcast not found" });
//     }

//     // Check if the user has already liked the podcast
//     if (podcast.likes.includes(userId)) {
//       return res
//         .status(400)
//         .json({ message: "You have already liked this podcast" });
//     }

//     // Add the user's ID to the podcast's list of likes
//     podcast.likes.push(userId);
//     await podcast.save();

//     res.json({ message: "Podcast liked successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

const favouritePodcast = async (req, res) => {
  try {
    const userId = req.user._id;
    const podcastId = req.params.podcastId;

    // Add the podcast ID to the user's favoritePodcasts array
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { favoritePodcasts: podcastId } },
      { new: true }
    ).populate("favoritePodcasts");
    res.json({ msg: "Added to favourite list" });
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  addPodcast,
  updatePodcast,
  deletePodcast,
  favouritePodcast,
  getAllPodcasts,
  getPodcast,
  getPodcastsAddedBy,
  getPodcastsSpeaker,
};
