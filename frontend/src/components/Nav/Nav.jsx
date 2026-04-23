import React from "react";
import "./nav.css";
import { useLocation } from "react-router-dom";
import logo from "../icons/hubspot.png";
import logo1 from "../imgs/logo.svg";
import logo2 from '../imgs/logo1.svg'
import profile from "../imgs/profile.svg";
import { NavLink } from "react-router-dom";
import profileIcon from '../icons/profile.svg';
import home from "../icons/home.svg";
import about from "../icons/about.svg";
import connect from "../icons/connect.svg";
import explore from "../icons/explore.svg";
import contact from "../icons/contact.svg";
import { useUser } from "../context/UserContext";

const Nav = () => {
  const {user} = useUser()
  return (
    <>
    <div className="navbar">
      <div className="nav-content">
        <div className="cont">
          <img src={logo1} alt="" height="30px" width="30px" />
          <p>
            <span className="title">Connect</span>{" "}
            
          </p>
        </div>
        <p>+91 9573208982</p>
      </div>
      <div className="nav">
        <div className="logo">
          <img src={logo2} alt="" height="45px" width="45px" />
          <div className="title-content">
          <h2>
            <span>H</span>ubSpot
          </h2>
           <span className="desc">Connect-Share-Learn</span>
           </div>
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink to="/" className="up">
                <img src={home} alt="" />
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="down" >
                <img src={about} alt="" />
                <p>About</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/explore" className="up">
                <img src={explore} alt="" />
                <p>Explore</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/connect" className="down">
                <img src={connect} alt="" />
                <p>Connect</p>
              </NavLink>
            </li>
            <li>
              <a href="#contact" className="up">
                <img src={contact} alt="" />
                <p>Contact Us</p>
              </a>
            </li>
          </ul>
        </div>
        <NavLink to='/profile' >
        <div className="login">
          <img src={profileIcon} alt="" />
          <p>{user?.username || "Guest"}</p>
        </div>
        </NavLink>
      </div>

    </div>
    </>

  );
};

export default Nav;
