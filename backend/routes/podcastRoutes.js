const express = require("express");
const router = express.Router();
const {
  addPodcast,
  updatePodcast,
  deletePodcast,
  getAllPodcasts,
  favouritePodcast,
  getPodcast,
} = require("../controllers/podcastController");
const auth = require("../middlewares/authMiddleware");

// http://localhost:9000/podcasts

router.post("/", auth, addPodcast);
router.get("/", getAllPodcasts);
router.get("/:id", auth, getPodcast);
router.put("/:id", auth, updatePodcast);
router.delete("/:id", auth, deletePodcast);
router.put("/:id/like", auth, favouritePodcast);

module.exports = router;
