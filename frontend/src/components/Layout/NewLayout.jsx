import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/sidebar";
import Contact from "../Pages/Contact";

const NewLayout = () => {
  return (
    <div className="app">
      <Nav />
      <div className="home">
        <div className="content">
          <Outlet />
        </div>
        
      </div>
      <div id="contact">
          <Contact/>
        </div>
    </div>
  );
};

export default NewLayout;
