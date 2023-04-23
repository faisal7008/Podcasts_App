const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  updateMe,
  deleteMe,
} = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");
const { favouritePodcast } = require("../controllers/podcastController");

// http://localhost:9000/users

router.post("/register", registerUser);
router.post("/login", loginUser);
router.route("/me").get(auth, getMe).put(auth, updateMe).delete(auth, deleteMe);
router.post("/favourite/:podcastId", auth, favouritePodcast);

module.exports = router;
