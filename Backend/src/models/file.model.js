const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    default: "application/octet-stream",
  },
  uploadedBy: {
    type: String,
    default: "Anonymous",
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const fileModel = mongoose.model("file", fileSchema);

module.exports = fileModel;
