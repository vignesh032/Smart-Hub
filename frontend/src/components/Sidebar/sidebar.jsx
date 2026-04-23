import React from "react";
import "./sidebar.css";
import home from "../icons/home.svg";
import about from "../icons/about.svg";
import connect from "../icons/connect.svg";
import explore from "../icons/explore.svg";
import contact from "../icons/contact.svg";

import { NavLink } from "react-router-dom";

const sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/">
            <img src={home} alt="" />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="el">
            <img src={about} alt="" />
            <p>About</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" className="el">
            <img src={explore} alt="" />
            <p>Explore</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/connect" className="el">
            <img src={connect} alt="" />
            <p>Connect</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="el">
            <img src={contact} alt="" />
            <p>Contact Us</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default sidebar;
