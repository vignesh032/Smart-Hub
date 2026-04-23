import React from "react";
import { useUser } from "../context/UserContext";
import profileIcon from "../icons/profile.svg";
import "./profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useUser();
  const navigate = useNavigate()
  const handleLogout = async()=>{
    navigate('/login')
  }
  return (
    <div>
      <h2>Profile</h2>
      <div className="profile-card">
        <img src={profileIcon} alt="" />
        <div className="profile-card-details">
          <div className="profile-card-details-top">
            <p>{user?.username || ""}</p>
            <button>Edit</button>
          </div>
          <div className="bio-details">
            <h4>Bio </h4>
            <p>I am a Passionate Web Developer</p>
            <div className="profile-links">
              <a href="https://www.instagram.com/exsoluss" target="_blank">Instagram</a>
              <a href="https://www.linkedin.com/in/vigneshvs03" target="_blank">LinkedIn</a>
            </div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
