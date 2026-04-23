const userModel = require("../models/auth.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllUsers = async(req,res)=>{
  try{
    const users = await userModel
      .find({}, "username email instaId linkedinId bio")
      .sort({ username: 1 }); 

    res.status(200).json({
      users, 
    });
  }catch(err){
    console.log(err.message)
    res.status(500).json({message:"Server Error"})
  }
}

module.exports = { registerUser, loginUser,getAllUsers };
