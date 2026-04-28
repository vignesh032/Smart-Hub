import React from "react";
import profile from "../icons/profile.svg";
import "./about.css";
import html from "../icons/html.svg";
import css from "../icons/css.svg";
import react from "../icons/react.svg";
import git from "../icons/git.svg";
import node from "../icons/node.svg";
import db from "../icons/db.svg";
import instaIcon from "../icons/instaw.svg";
import linkedIn from "../icons/linkedinw.svg";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        Smart Hub is a collaborative web application designed to connect users,
        share profiles, and streamline interactions through a modern and
        user-friendly interface. This project was developed as a team effort
        with clear role distribution:
      </p>
      <div className="team-details">
        <div className="team-m">
          <img src={profile} alt="" className="profile" />
          <div className="team-m-details">
            <h1>Kyasaram Vignesh</h1>
            <p>
              Developed the backend of Smart Hub using Node.js and MongoDB.
              Responsible for creating APIs, managing database operations,
              implementing authentication, and ensuring smooth communication
              between frontend and backend systems. Also contributed to version
              control and project management using Git and GitHub.
            </p>
            <div className="a">
              <a
                href="https://www.instagram.com/exsoluss"
                target="_blank"
                rel="noopener noreferrer"
                className="insta"
              >
                <img src={instaIcon} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/vigneshvs03"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <img src={linkedIn} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="team-m">
          <img src={profile} alt="" className="profile" />
          <div className="team-m-details">
            <h1>Gajengi Shivasai</h1>
            <p>
              Handled frontend development using JavaScript and React. Focused
              on building dynamic components, managing state, and implementing
              interactive features to enhance usability and overall performance
              of the application.
            </p>
            <div className="a">
              <a
                href="https://www.instagram.com/exsoluss"
                target="_blank"
                rel="noopener noreferrer"
                className="insta"
              >
                <img src={instaIcon} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/vigneshvs03"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <img src={linkedIn} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="team-m">
          <img src={profile} alt="" className="profile" />
          <div className="team-m-details">
            <h1>Endapelly SriCharan Reddy</h1>
            <p>
              Worked on the frontend development of Smart Hub using HTML and
              CSS. Responsible for designing and structuring the user interface,
              ensuring responsiveness, and creating a clean, user-friendly
              layout for seamless user experience across devices.
            </p>
            <div className="a">
              <a
                href="https://www.instagram.com/exsoluss"
                target="_blank"
                rel="noopener noreferrer"
                className="insta"
              >
                <img src={instaIcon} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/vigneshvs03"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <img src={linkedIn} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
