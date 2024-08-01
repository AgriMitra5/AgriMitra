import React, { useState } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/logo.png";
import "./Login.css";
import UserData from "../../Data/FarmerData"; // Import UserData

const Login = () => {
  const [username, setUsername] = useState(""); // State for username
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Farmer");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Find user in UserData
    const user = UserData.find(
      (user) =>
        user.username === username && // Check username
        user.mobileNumber === mobileNumber &&
        user.password === password &&
        user.role === role
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", role);
      localStorage.setItem("userName", user.name); // Save the user's name

      // Redirect based on the role
      if (role === "Farmer") {
        navigate("/farmer-dashboard/productList");
      } else if (role === "Owner") {
        navigate("/owner-dashboard");
      }
    } else {
      alert("Invalid credentials or role");
    }
  };

  return (
    <div className="container mt-5 border p-10">
      {/* Logo */}
      <div className="text-center mb-4">
        <img
          className="logo_img"
          src={logo}
          alt="Logo"
          style={{ width: "150px" }}
        />
      </div>
      <form onSubmit={handleLogin}>
        {/* Username Field */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Mobile Number Field */}
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            id="mobile"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* User Role Dropdown */}
        <div className="form-group">
          <label htmlFor="role">User Role</label>
          <div className="custom-select-wrapper">
            <select
              className="form-control custom-select"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Farmer">Farmer</option>
              <option value="Owner">Owner</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

      <div className="text-center mt-3">
        <p>
          Not have an account? <a href="/register">Registered here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
