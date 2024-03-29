const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// @desc    Register new user
// @route   POST /users
// @access  Public

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user entered all the details
    if (!name || !email || !password) {
      return res
        .status(401)
        .json({ message: "Please fill the necessary details" });
    }

    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password and create a new user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();

    // Create a JWT token and return it
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Authenticate a user
// @route   POST /users/login
// @access  Public

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user entered all the details
    if (!email || !password) {
      return res
        .status(401)
        .json({ message: "Please fill the necessary details" });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create a JWT token and return it
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
// @desc    get user
// @route   GET /users/me
// @access  Private

const getMe = async (req, res) => {
  try {
    // Fetch the authenticated user's information
    const user = await User.findById(req.user.userId).select("-password");
    // console.log(req.user.userId);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update User
// @route   PUT /users/me
// @access  Private


const comparePasswords = (password, hashedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const updateMe = async (req, res) => {
  try {
    const { name, email, currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    // Update the authenticated user's information
    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }
    let passwordMsg = null;
    if (currentPassword && newPassword) {
      let passwordMatch = false;
      passwordMatch = await comparePasswords(currentPassword, user.password);
      if (passwordMatch) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        user.password = hashedPassword;
        passwordMsg = 'Password updated succesfully!';
      } else {
        return res.status(403).json({ passwordError: 'Current Password does not match!' });
      }
    }
    await user.save();
    return res.status(200).json({ user, message: 'Profile updated', passwordMsg });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Delete User
// @route   DELETE /users/me
// @access  Private

const deleteMe = async (req, res) => {
  try {
    // Delete the authenticated user's account
    await User.findByIdAndDelete(req.user.userId);
    res.json({ id: req.user.userId, message: "Account deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  updateMe,
  deleteMe,
};
