const userModel = require("../models/auth.model");
const fileModel = require("../models/file.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const userAlreadyExists = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (userAlreadyExists) {
      return res.status(409).json({
        message: "user Already Exists",
      });
    }
    const hashedPass = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      password: hashedPass,
    });
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    );
    res.cookie("token", token);
    res.status(201).json({
      message: "user Successfully created",
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        insta: user.insta,
        linkedin: user.linkedin,
        bio: user.bio,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const user = await userModel.findOne({
      username,
    });

    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", token);
    res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        insta: user.insta,
        linkedin: user.linkedin,
        bio: user.bio,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel
      .find({}, "username email insta linkedin bio")
      .sort({ username: 1 });

    res.status(200).json({
      users,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateUsers = async (req, res) => {
  try {
    const { id, insta, linkedin, bio } = req.body;

    if (!id) {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    const updateData = {};

    if (typeof insta === "string") updateData.insta = insta.trim();
    if (typeof linkedin === "string") updateData.linkedin = linkedin.trim();
    if (typeof bio === "string") updateData.bio = bio.trim();

    const user = await userModel.findByIdAndUpdate(id, updateData, {
      returnDocument: "after",
    });

    // 🔥 IMPORTANT FIX
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const { password, ...safeUser } = user.toObject();

    res.status(200).json({
      message: "Profile Updated",
      user: safeUser,
    });
  } catch (err) {
    console.error("ERROR:", err); // 👈 CHECK THIS IN TERMINAL
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// File upload controller
const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const { fileName, category } = req.body;

    if (!fileName || !category) {
      return res
        .status(400)
        .json({ message: "File name and category are required" });
    }

    const newFile = await fileModel.create({
      fileName,
      category,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      uploadedBy: req.body.uploadedBy || "Anonymous",
    });

    res.status(201).json({
      message: "File uploaded successfully",
      file: newFile,
    });
  } catch (err) {
    console.error("File upload error:", err);
    res.status(500).json({ message: "Server error during file upload" });
  }
};

// Get all files controller
const getAllFiles = async (req, res) => {
  try {
    const { category } = req.query;

    let query = {};
    if (category && category !== "All") {
      query.category = category;
    }

    const files = await fileModel.find(query).sort({ uploadedAt: -1 });

    res.status(200).json({
      message: "Files retrieved successfully",
      files,
    });
  } catch (err) {
    console.error("Get files error:", err);
    res.status(500).json({ message: "Server error while fetching files" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  updateUsers,
  uploadFile,
  getAllFiles,
};
