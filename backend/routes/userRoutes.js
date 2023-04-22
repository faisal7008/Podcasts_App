const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");

// http://localhost:9000/users

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", auth, getProfile);

module.exports = router;
