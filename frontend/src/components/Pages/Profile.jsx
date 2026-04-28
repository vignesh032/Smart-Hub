import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import profileIcon from "../icons/profile.svg";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [show, setShow] = useState(false);
  const [insta, setInsta] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [bio, setBio] = useState("");
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const handleLogout = () => {
  setUser(null);
  localStorage.removeItem("user"); // if you stored it
  navigate("/login");
};
  useEffect(() => {
    if (user) {
      setInsta(user.insta || "");
      setLinkedin(user.linkedin || "");
      setBio(user.bio || "");
    }
  }, [user]);
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      if (!insta && !linkedin && !bio) {
        alert("Enter at least one field");
        return;
      }
      console.log("user",user)
      console.log("userid",user.id)
      const res = await axios.post(
        "http://localhost:3000/api/auth/update-user",
        {
          id: user._id,
          insta: insta,
          linkedin: linkedin,
          bio: bio,
        },
      );

      setUser(res.data.user);
      console.log(res.data);
      setShow(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <h2>Profile</h2>
      <div className="profile-card">
        <img src={profileIcon} alt="" />
        <div className="profile-card-details">
          <div className="profile-card-details-top">
            <p>{user?.username || ""}</p>
            <button
              onClick={() => {
                setShow(true);
              }}
            >
              Edit
            </button>
          </div>
          {show && (
            <>
              <div className="input-detailss">
                <fieldset>
                  <legend>Enter Details</legend>
                  <div className="insta">
                    <label htmlFor="insta">Insta Id</label>
                    <input
                      type="text"
                      placeholder="Eg. vignesh_03"
                      name="insta"
                      value={insta}
                      onChange={(e) => {
                        setInsta(e.target.value);
                      }}
                    />
                  </div>
                  <div className="linkedin">
                    <label htmlFor="linkedin">Linkedin</label>
                    <input
                      type="text"
                      placeholder="Eg. vigneshvs03"
                      name="linkedin"
                      value={linkedin}
                      onChange={(e) => {
                        setLinkedin(e.target.value);
                      }}
                    />
                  </div>
                  <div className="bio">
                    <label htmlFor="bio">Bio</label>
                    <input
                      type="text"
                      placeholder=""
                      name="bio"
                      value={bio}
                      onChange={(e) => {
                        setBio(e.target.value);
                      }}
                    />
                  </div>
                  <div className="close-btn">
                    <button
                      disabled={!insta && !linkedin && !bio}
                      onClick={handlesubmit}
                    >
                      Submit
                    </button>
                    <button
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </fieldset>
              </div>
            </>
          )}

          <div className="bio-details">
            <h4>Bio </h4>
            <p>{user?.bio || "No Bio yet"}</p>
            <div className="profile-links">
              {user?.insta && (
                <a
                  href={`https://instagram.com/${user.insta}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              )}
              {user?.linkedin && (
                <a
                  href={`https://www.linkedin.com/in/${user.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}
            </div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
