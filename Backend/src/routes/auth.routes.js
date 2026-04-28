const express = require("express");
const authContoller = require("../contollers/auth.controller");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads/";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/register", authContoller.registerUser);
router.post("/login", authContoller.loginUser);
router.get("/users", authContoller.getAllUsers);
router.post("/update-user", authContoller.updateUsers);

// File routes
router.post("/upload-file", upload.single("file"), authContoller.uploadFile);
router.get("/files", authContoller.getAllFiles);

module.exports = router;
