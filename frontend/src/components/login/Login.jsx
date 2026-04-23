import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import styles from "../login/login.module.css";
import axios from "axios";

const Login = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [instaId, setInstaId] = useState("");
  const [linkedinId, setLinkedInId] = useState("");
  const [pass, setPass] = useState("");
  const [Name, setName] = useState("Login");
  const [newName, setnewName] = useState("Sign In");
  const [boolean, setBoolean] = useState(true);
  const [text, setText] = useState("Already Have an Account");
  const handleLogin = () => {
    if (boolean == true) {
      setName("Sign In");
      setText("New User");
      setnewName("Login");
      setBoolean(false);
    } else {
      setName("Login");
      setText("Already Have an Account");
      setnewName("Sign In");
      setBoolean(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (boolean === true) {
        const res = await axios.post(
          "http://localhost:3000/api/auth/register",
          {
            username,
            email,
            password: pass,
          },
        );

        const userData = res.data.user;

        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData)); // ✅ ADD THIS

        navigate("/");
      } else {
        const res = await axios.post("http://localhost:3000/api/auth/login", {
          username,
          password: pass,
        });

        const userData = res.data.user; // ✅ take FULL user

        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData)); // ✅ FIXED

        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className={styles.login}>
      <form>
        <div className={styles["input-details"]}>
          <h2>{Name} Details</h2>
          <label htmlFor="username"></label>
          <input
            type="text"
            placeholder="Eg:160124733043"
            className={styles.username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          {boolean && (
            <>
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className={styles.email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </>
          )}

          <label htmlFor="password"></label>
          <input
            type="password"
            placeholder="Password"
            className={styles.password}
            name="password"
            onChange={(e) => setPass(e.target.value)}
          />
          <div className={styles.btn}>
            <div className={styles.primary}>
              <button type="submit" onClick={handleSubmit}>
                {Name}
              </button>
              <p>
                {text}? <span onClick={handleLogin}>{newName}</span>
              </p>
            </div>
            <div className="secondary"></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
