import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext";
import "./connect.css";

const Connect = () => {
  const [users, setUsers] = useState([]);
  const { user } = useUser(); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/users");
        console.log("API RESPONSE:", res.data);
        const filtered = res.data.users.filter(
          (u) => u._id !== user?.id
        );

        setUsers(filtered);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, [user]);

  return (
    <div className="connect-container">
      <h2>All Users</h2>

      <div className="card-container">
        {users.map((u) => (
          <div className="card" key={u._id}>
            <h3>{u.username}</h3>
            <p>{u.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;