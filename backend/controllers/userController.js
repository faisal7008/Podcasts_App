const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// @desc    Register new user
// @route   POST /users
// @access  Public

const registerUser = async (req, res) => {
  try {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
      podcasts: [],
    });
    await newUser.save();

    // Generate a JWT token and send it to the client
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
    res.status(201).json({ user: newUser, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Authenticate a user
// @route   POST /users/login
// @access  Public

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token and send it to the client
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    get user profile
// @route   PUT /users/:id
// @access  Private

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).populate("podcasts");
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update User
// @route   PUT /api/users/:id
// @access  Private

// const updateUser = async (req, res) => {
//   const user = await User.findById(req.params.id);
//   if (!user) {
//     res.status(400);
//     throw new Error("User not found");
//   }

//   // Check for profile picture
//   // if(!req.file){
//   //     res.status(401)
//   //     throw new Error('No file')
//   // }
//   if (req.body.password) {
//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);
//     req.body.password = hashedPassword;
//   }
//   if (req.file) {
//     // Profile picture
//     const url = req.protocol + "://" + req.get("host");
//     const uploadProfilePic = await user.updateOne({
//       $set: {
//         profilePicture: url + "/uploads/profile/" + req.file.filename,
//       },
//     });
//   }

//   const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });

//   res.status(200).json(updatedUser);
// });

// @desc    Delete Users
// @route   DELETE /api/users/:id
// @access  Admin

// const deleteUser = async (req, res) => {
//   const user = await User.findById(req.params.id);

//   // Check for user
//   if (!req.user) {
//     res.status(401);
//     throw new Error("Not Authorized");
//   }

//   if (!user) {
//     res.status(400);
//     throw new Error("User not found");
//   }

//   await user.remove();

//   res.status(200).json({ id: req.params.id });
// });

// follow/unfollow a user
// const follow = async (req, res) => {
//   const id = req.params.id;
//   const { userId } = req.body;

//   try {
//     const user = await User.findById(id);
//     const followedUser = await User.findById(userId);
//     if (!user.followings.includes(userId)) {
//       await user.updateOne({ $push: { followings: userId } });
//       await followedUser.updateOne({ $push: { followers: id } });
//       res.status(200).json("Followed");
//     } else {
//       await user.updateOne({ $pull: { followings: userId } });
//       await followedUser.updateOne({ $pull: { followers: id } });
//       res.status(200).json("Unfollowed");
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// Generate JWT

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//   });
// };

module.exports = {
  registerUser,
  loginUser,
  getProfile,
};
