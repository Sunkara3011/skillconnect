import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ onLogin }) {
  const [userType, setUserType] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(userType);
      navigate(userType === "user" ? "/user-dashboard" : "/professional-dashboard");
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit} className="form-card">
        <h2>Login to SkillConnect</h2>

        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </label>

        <label>
          Login as:
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="user">User</option>
            <option value="professional">Professional</option>
          </select>
        </label>

        <button type="submit" className="hero-btn w-full">
          Login
        </button>
      </form>
    </div>
  );
}

