import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', userData);
      alert(response.data.message);
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="register-container">
      <h1>Task Manager</h1>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <p>
          Already have an account? <a href="/login">Login</a>
        </p>
    </div>
  );
};

export default Register;
