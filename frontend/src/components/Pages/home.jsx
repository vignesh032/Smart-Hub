import React from "react";
import "./home.css";
import arrow from "../icons/arrow.svg";
import connect from "../icons/connect.svg";
import share from "../icons/share.svg";
import learn from "../icons/learn.svg";
import { NavLink } from "react-router-dom";

const home = () => {
  return (
    <div className="hero">
      <div className="left">
        <h1>
          <span>Hey There,</span> Welcome to HubSpot
        </h1>
        <p>
          A simple platform where students can connect, share notes, and access
          class resources all organized in one place
        </p>
        <NavLink to="/connect" className="cnt" >
          <button>
            <span>Connect</span>
            <img src={arrow} alt="arrow-icon" height="20px" width="20px" />
          </button>
        </NavLink>
      </div>
      <div className="right">
        <div className="logos">
          <div className="one">
            <img src={connect} alt="learn" height="60px" width="60px" />
            <p>Stay connected</p>
          </div>
          <div className="one">
            <img src={share} alt="learn" height="60px" width="60px" />
            <p>Share Resources</p>
          </div>
          <div className="one">
            <img src={learn} alt="learn" height="60px" width="60px" />
            <p>Learn Smarter</p>
          </div>
        </div>
        <div className="right-text">
          <h2>
            Bringing your classroom online connect, collaborate, and grow
            together
          </h2>
        </div>
      </div>
    </div>
  );
};

export default home;
