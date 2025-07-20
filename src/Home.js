import React from "react";
import { Link } from "react-router-dom";
import "./Register.css"; // Reuse the same CSS for now

const Home = () => {
  return (
    <div className="register-container">
      <h1>Welcome to Task Manager</h1>
      <p>
        <Link to="/register">Register</Link> or <Link to="/login">Login</Link> to continue.
      </p>
    </div>
  );
};

export default Home;
