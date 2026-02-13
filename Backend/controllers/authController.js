// import User from "../models/User.js";
// import generateToken from "../utils/generateToken.js";

// // ✅ Register
// export const registerUser = async (req, res, next) => {
//   try {
//     const { name, email, password } = req.body;

//     const user = await User.create({
//       name,
//       email,
//       password,
//     });

//     res.status(201).json({
//       message: "Register successfull Rahul kkk",
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id),
//     });
//   } catch (error) {
//     if (error.code === 11000) {
//       return res.status(409).json({
//         message: "Email already registered gi bhaiya",
//       });
//     }

//     next(error);
//   }
// };

// // ✅ Login
// export const loginUser = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user || !(await user.matchPassword(password))) {
//       return res.status(401).json({
//         message: "Invalid email or password",
//       });
//     }

//     res.json({
//       smg: "Login successfull gi",
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id),
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // ✅ Get Profile
// export const getUserProfile = async (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Profile fetched successfully",
//     data: req.user,
//   });
// };

import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// Register
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const user = await User.create({ name, email, password });

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
};

// Login
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
};

// Logout
export const logoutUser = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
};

// Profile
export const getUserProfile = async (req, res) => {
  res.status(200).json(req.user);
};
