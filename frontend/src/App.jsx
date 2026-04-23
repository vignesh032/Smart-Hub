import React from "react";
import "./app.css";
import Nav from "./components/Nav/Nav";
import Sidebar from "./components/Sidebar/sidebar";
import { Route, Routes } from "react-router-dom";
import NewLayout from "./components/Layout/NewLayout";
import Explore from "./components/Pages/Explore";
import Home from "./components/Pages/home";
import About from "./components/Pages/About";
import Connect from "./components/Pages/Connect";
import Contact from "./components/Pages/Contact";
import Login from "./components/login/Login";
import Profile from "./components/Pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<Login/>}/>
      </Route>
      <Route path="/" element={<NewLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="explore" element={<Explore />} />
        <Route path="connect" element={<Connect />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
