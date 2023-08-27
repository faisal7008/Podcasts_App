const express = require("express");
const router = express.Router();
const {
  addEpisode,
  updateEpisode,
  deleteEpisode,
  getAllEpisodesByPodcast,
  getEpisode,
} = require("../controllers/episodeController");
const auth = require("../middlewares/authMiddleware");

// http://localhost:9000/episodes

router.post("/", auth, addEpisode);
router.get("/:podcastId", getAllEpisodesByPodcast);
router.get("/:id", getEpisode);
router.put("/:id", auth, updateEpisode);
router.delete("/:id", auth, deleteEpisode);

module.exports = router;
