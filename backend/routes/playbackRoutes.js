const express = require("express");
const router = express.Router();
const {
  addPlayback,
  updatePlayback,
  deletePlayback,
  likePodcast,
} = require("../controllers/playbackController");
const auth = require("../middlewares/authMiddleware");

// http://localhost:9000/playbacks

router.post("/", auth, addPlayback);
router.put("/:id", auth, updatePlayback);
router.delete("/:id", auth, deletePlayback);

module.exports = router;
