import React from "react";
import "./contact.css";
import logo2 from "../imgs/logo.svg";
import mail from "../icons/mail.svg";
import phone from "../icons/phone.svg";
import location from "../icons/location.svg";
import insta from "../icons/insta.svg";
import linkedin from "../icons/linkedin.svg";
import github from "../icons/github.svg";
import facebook from "../icons/facebook.svg";

const Contact = () => {
  return (
    <div className="contact">
      <ul className="ul">
        <li className="head li">
          <img className="img" src={logo2} alt="" height="35px" width="35px" />
          <div className="title-content">
            <h2>HubSpot</h2>
            <p className="desc1">Connect-Share-Learn</p>
          </div>
        </li>
        <li className="li img">
          <img src={mail} alt="mail" height="20px" width="20px" />
          <p>kyasaramvignesh03@gmail.com</p>
        </li>
        <li className="li img">
          <img src={phone} alt="phone" height="20px" width="20px" />
          <p>+919573208982</p>
        </li>
        <li className="loc li img">
          <img src={location} alt="location" height="20px" width="20px" />
          <p>
            H.NO:1-51/29/1/D1 (877), Bank Colony, Road No 8, Vinayak Nagar,
            Nizamabad, Telangana, India
          </p>
        </li>
        <li className="links li">
          <a href="www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="instagram" height="30px" width="30px" />
          </a>
          <a
            href="https://www.linkedin.com/in/vigneshvs03/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="instagram" height="30px" width="30px" />
          </a>
          <a
            href="https://github.com/vignesh032"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="instagram" height="30px" width="30px" />
          </a>
          <a href="www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="instagram" height="30px" width="30px" />
          </a>
        </li>
      </ul>
      <ul className="ul">
        <li className="li">
          <h3>Quick Links</h3>
        </li>
        <li className="li">About Us</li>
        <li className="li">Connect</li>
        <li className="li">Learn</li>
        <li className="li">Share</li>
      </ul>
      <ul className="ul">
        <li className="li">
          <h3>Stay Connected</h3>
        </li>
        <li className="li tex">
          <p>Get updates on new features, blogs, and community posts.</p>
        </li>
        <li className="li input">
          <input type="email" placeholder="Enter your email" />
        </li>
      </ul>
    </div>
  );
};

export default Contact;
