const express = require("express");
const router = express.Router();
const {
  addPodcast,
  updatePodcast,
  deletePodcast,
  likePodcast,
} = require("../controllers/podcastController");
const auth = require("../middlewares/authMiddleware");

// http://localhost:9000/podcasts

router.post("/", auth, addPodcast);
router.put("/:id", auth, updatePodcast);
router.delete("/:id", auth, deletePodcast);
router.put("/:id/like", auth, likePodcast);

module.exports = router;
