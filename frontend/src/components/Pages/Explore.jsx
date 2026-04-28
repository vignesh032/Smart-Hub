import React, { useState, useEffect } from "react";
import "./explore.css";

const Explore = () => {
  const [files, setFiles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [fileName, setFileName] = useState("");
  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const categories = ["All", "Notes", "PDF", "Assignments", "Books", "Other"];

  // Fetch files from backend
  useEffect(() => {
    fetchFiles();
  }, [selectedCategory]);

  const fetchFiles = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/auth/files?category=${selectedCategory}`,
      );
      const data = await response.json();
      if (response.ok) {
        setFiles(data.files);
      }
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  // Group files by category
  const filesByCategory = files.reduce((acc, file) => {
    const cat = file.category || "Other";
    if (!acc[cat]) {
      acc[cat] = [];
    }
    acc[cat].push(file);
    return acc;
  }, {});

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile || !fileName || !category) {
      setUploadMessage("Please fill all fields and select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("fileName", fileName);
    formData.append("category", category);

    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/upload-file",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (response.ok) {
        setUploadMessage("File uploaded successfully!");
        setFileName("");
        setCategory("");
        setSelectedFile(null);
        fetchFiles();
      } else {
        setUploadMessage(data.message || "Upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadMessage("Error uploading file");
    }
  };

  return (
    <div className="explore-container">
      {/* Top Section: Display Files by Category */}
      <div className="files-display-section">
        <h2 className="section-title">Explore Files & Notes</h2>

        <div className="category-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="files-grid">
          {Object.entries(filesByCategory).map(([cat, catFiles]) => (
            <div key={cat} className="category-section">
              <h3 className="category-title">{cat}</h3>
              <div className="files-list">
                {catFiles.length === 0 ? (
                  <p className="no-files">No files in this category</p>
                ) : (
                  catFiles.map((file) => (
                    <div key={file._id} className="file-card">
                      <div className="file-icon">📄</div>
                      <div className="file-info">
                        <h4 className="file-name">{file.fileName}</h4>
                        <p className="file-category">{file.category}</p>
                        <p className="file-date">
                          {new Date(file.uploadedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <a
                        href={`http://localhost:3000/${file.filePath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-btn"
                      >
                        View
                      </a>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        {files.length === 0 && (
          <p className="no-files-message">
            No files available. Upload some files below!
          </p>
        )}
      </div>

      {/* Bottom Section: Upload File Form */}
      <div className="upload-section">
        <h3 className="upload-title">Upload File</h3>
        <form className="upload-form" onSubmit={handleUpload}>
          <div className="form-group">
            <label>File Name:</label>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Enter file name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
            >
              <option value="">Select Category</option>
              {categories
                .filter((c) => c !== "All")
                .map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-group">
            <label>Select File:</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="form-file-input"
            />
          </div>

          <button type="submit" className="upload-btn">
            Upload File
          </button>

          {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Explore;
